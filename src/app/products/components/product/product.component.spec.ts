import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { DebugElement } from '@angular/core';
import { ProductModel, Category } from '../../models/product.model';

describe('ProductComponent', () => {
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;
    let productNameEl: DebugElement;
    let showProductEl: DebugElement;
    let addProductEl: DebugElement;
    const expectedProduct: ProductModel = {
        productName: 'Testing name',
        productCategory: Category.Computer,
        id: 0,
        price: 0,
        description: '',
        imageUrl: ''
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProductComponent]
        });

        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display product name', () => {
        component.product = expectedProduct;
        fixture.detectChanges();
        productNameEl = fixture.debugElement.query(By.css('h2'));

        const expectedPipedName = expectedProduct.productName.toUpperCase();
        expect(productNameEl.nativeElement.textContent).toContain(expectedPipedName);
    });

    it('should raise selected event showProductDetails when clicked', () => {
        let selectedProduct: ProductModel;
        component.product = expectedProduct;
        fixture.detectChanges();

        showProductEl = fixture.debugElement.query(By.css('.show'));
        component.showProductDetails.subscribe((product: ProductModel) => (selectedProduct = product));

        showProductEl.triggerEventHandler('click', null);
        expect(selectedProduct).toBe(expectedProduct);
    });

    it('should raise selected event addToCartProduct when clicked', () => {
        let selectedProduct: ProductModel;
        component.product = expectedProduct;
        fixture.detectChanges();

        addProductEl = fixture.debugElement.query(By.css('.add'));
        component.addToCartProduct.subscribe((product: ProductModel) => (selectedProduct = product));

        addProductEl.triggerEventHandler('click', null);
        expect(selectedProduct).toBe(expectedProduct);
    });
});
