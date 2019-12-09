import {
  inject,
  async,
  ComponentFixture,
  TestBed
} from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { CartListComponent } from "./cart-list.component";
import { DebugElement } from "@angular/core";
import { Router } from "@angular/router";
import { CartService } from "../../services";
import { RouterStub } from "./../../../testing-helpers";
import { CartModel } from "../../models";
import { Category } from "src/app/products/models/product.model";
import { OrderByPipe } from "src/app/shared/pipes/order-by.pipe";
import { CartItemComponent } from "../cart-item/cart-item.component";
import { SumPipe } from "src/app/shared/pipes/sum.pipe";
import { LocalStorageService } from "src/app/core/services/local-storage.service";

class MockRouter {
  navigate = jasmine.createSpy("navigate");
}

describe("CartListComponent", () => {
  let component: CartListComponent,
    fixture: ComponentFixture<CartListComponent>,
    btnEl: DebugElement;
  const testCarts: Array<CartModel> = [
    {
      item: {
        productName: "Testing name",
        productCategory: Category.Computer,
        id: 1,
        price: 0,
        description: "",
        imageUrl: ""
      },
      count: 1,
      price: 0,
      name: "Testing name"
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartListComponent,
        OrderByPipe,
        CartItemComponent,
        SumPipe
      ],
      providers: [CartService, { provide: Router, useClass: RouterStub }]
    });

    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
  });

  it("should tell ROUTER to navigate when product clicked", inject(
    [Router],
    (router: Router) => {
      const navigate = spyOn(router, "navigate");
      fixture.detectChanges();
      component.carts = testCarts;  
      fixture.detectChanges();
      btnEl = fixture.debugElement.query(By.css(".btn"));
      btnEl.triggerEventHandler("click", null);

      const navArgs = navigate.calls.first().args[0];

      expect(navArgs).toEqual(["/order"]);
    }
  ));
});
