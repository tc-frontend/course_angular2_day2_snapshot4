import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router  } from '@angular/router';


import { IProduct } from './product';
import { ProductService } from './product-mock.service';
import { NumberValidators } from '../shared/number.validator';
import {  StringValidators } from '../shared/string.validator';

@Component({
    templateUrl: 'app/products/product-edit.component.html'
})
export class ProductEditComponent implements OnInit, OnDestroy {
 
    pageTitle: string = 'Product Edit';
    errorMessage: string;
    product: IProduct;
    private sub: Subscription;
    mode: string;
    productForm: FormGroup;
    isLoading: boolean = false;
    constructor( private route: ActivatedRoute,
                private router: Router,
                private productService: ProductService,
                private fb: FormBuilder) {
      
    }
    ngOnInit(): void {
        this.productForm = this.fb.group({
            productName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            codeGroup: this.fb.group({
                productCode:  ['', Validators.required],
                confirmProductCode: ['', Validators.required],
            }, {validator: StringValidators.controlValueMatcher('productCode', 'confirmProductCode')}),
            starRating: ['', NumberValidators.range(1,5)],
            description: '',
            availability: 'available',
            outOfStockReason: ['', Validators.required],
            quantity: [0, [Validators.maxLength(8), Validators.pattern("^(0|[1-9][0-9]*)$")]]
        });

       this.changeAvailability('availability');

        // Read the product Id from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            }
        );
    }
 
    changeAvailability(type: string): void{
        const reasonForm= this.productForm.get('outOfStockReason');

        if(type === "outofstock"){
            reasonForm.setValidators(Validators.required);
        } else {
            reasonForm.clearValidators();
        }

        reasonForm.updateValueAndValidity()
    }

    getProduct(id: number): void {
        this.isLoading = true;
        this.productService.getProduct(id)
            .subscribe(
                (product: IProduct) => this.onProductRetrieved(product),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onProductRetrieved(product: IProduct): void {
        this.product = product;
        
        this.productForm.patchValue({
            productName: product.productName,
            codeGroup:{
                productCode: product.productCode
            },
            starRating: product.starRating,
            description: product.description,
            availability: product.availability,
            outOfStockReason: product.outOfStockReason,
            quantity: product.quantity
        });
        this.isLoading = false;
        const confirmProductCode= this.productForm.get('codeGroup.confirmProductCode');
        if (product.id === 0) {
            this.pageTitle = 'Add Product';
            //this.product.tags = [];
            this. mode='create';
            confirmProductCode.setValidators(Validators.required);
        } else {
            this.pageTitle = `Edit Product: ${product.productName}`;
            this.mode ='edit';
            confirmProductCode.clearValidators();
        }

    }
    /*
    addTag(): void {
        if(!this.product.tags){
            this.product.tags = [];
        }
        this.product.tags.push('');
    }
    */

    deleteProduct(): void {
        if (this.product.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
       } else {
            if (confirm(`Really delete the product: ${this.product.productName}?`)) {
                this.productService.deleteProduct(this.product.id)
                    .subscribe(
                        () => this.onSaveComplete(),
                        (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }
    

    saveProduct(): void {
        if (this.productForm.dirty && this.productForm.valid) {
            // Copy the form values over the product object values
            let p = Object.assign({}, this.product, this.productForm.value);
            p.productCode = p.codeGroup.productCode;
            delete p.codeGroup;

            this.productService.saveProduct(p)
                .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                );
        } else if (!this.productForm.dirty) {
            this.onSaveComplete();
        }
    }

    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.productForm.reset();
        this.router.navigate(['/products']);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}