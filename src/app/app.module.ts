import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderSucessComponent } from './components/order-sucess/order-sucess.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';

import { RouterModule } from '@angular/router';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { LoginComponent } from './components/login/login.component';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth-gaurd/auth-guard.service';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    OrderSucessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    CheckOutComponent,
    AdminOrdersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent,
      },

      {
        path: 'order-success',
        component: OrderSucessComponent,
      },
      {
        path: 'customer/orders',
        component: MyOrdersComponent,
      },
      {
        path: 'checkout',
        component: CheckOutComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'admin/products',
        component: AdminProductsComponent,
      },
      {
        path: 'admin/order',
        component: AdminOrdersComponent,
      },
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService, AuthGuardService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
