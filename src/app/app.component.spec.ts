import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterLinkStubDirective } from './testing-helpers';
import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, RouterLinkStubDirective],
      imports: [
        HttpClientModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [

      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    linkDes = fixture.debugElement.queryAll(
      By.directive(RouterLinkStubDirective)
    );
    links = linkDes.map(
      d => d.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective
    );

    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });


  beforeEach(() => { });

  it('should display a different test title', () => {
    component.title.nativeElement.innerHTML = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(5, 'should have 5 links');
    expect(links[0].linkParams).toBe('/home', '1st link should go to Home');
    expect(links[1].linkParams).toBe('/cart', '2nd link should go to Cart');
    expect(links[2].linkParams).toBe('/orders', '3nd link should go to Orders');
    expect(links[3].linkParams).toBe('/admin', '4th link should go to Admin');
    expect(links[4].linkParams).toBe('/login', '5th link should go to login');
  });

  it('can click Home link in template', () => {
    const homeLinkDe = linkDes[0];
    const homeLink = links[0];

    expect(homeLink.navigatedTo).toBeNull(
      'link should not have navigated yet'
    );

    homeLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(homeLink.navigatedTo).toBe('/home');
  });

  it('can click Cart link in template', () => {
    const cartLinkDe = linkDes[1];
    const cartLink = links[1];

    expect(cartLink.navigatedTo).toBeNull(
      'link should not have navigated yet'
    );

    cartLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(cartLink.navigatedTo).toBe('/cart');
  });

  it('can click Orders link in template', () => {
    const ordersLinkDe = linkDes[2];
    const ordersLink = links[2];

    expect(ordersLink.navigatedTo).toBeNull(
      'link should not have navigated yet'
    );

    ordersLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(ordersLink.navigatedTo).toBe('/orders');
  });

  it('can click Admin link in template', () => {
    const adminLinkDe = linkDes[3];
    const adminLink = links[3];

    expect(adminLink.navigatedTo).toBeNull(
      'link should not have navigated yet'
    );

    adminLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(adminLink.navigatedTo).toBe('/admin');
  });

  it('can click Login link in template', () => {
    const loginLinkDe = linkDes[4];
    const loginLink = links[4];

    expect(loginLink.navigatedTo).toBeNull(
      'link should not have navigated yet'
    );

    loginLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(loginLink.navigatedTo).toBe('/login');
  });

});
