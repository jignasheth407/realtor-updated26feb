import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokeInterceptorService } from './toke-interceptor.service';
import { APIsService } from './apis.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './arces/pages/error/error.component';
import { AboutComponent } from './arces/pages/about/about.component';
import { AgencyComponent } from './arces/pages/agency/agency.component';
import { AgencyDetailComponent } from './arces/pages/agency-detail/agency-detail.component';
import { AgentComponent } from './arces/pages/agent/agent.component';
import { AgentDetailComponent } from './arces/pages/agent-detail/agent-detail.component';
import { BlogGridComponent } from './arces/pages/blog-grid/blog-grid.component';
import { BlogListComponent } from './arces/pages/blog-list/blog-list.component';
import { BlogSingleComponent } from './arces/pages/blog-single/blog-single.component';
import { ComingSoonComponent } from './arces/pages/coming-soon/coming-soon.component';
import { CompareListingComponent } from './arces/pages/compare-listing/compare-listing.component';
import { ContactComponent } from './arces/pages/contact/contact.component';
import { FaqComponent } from './arces/pages/faq/faq.component';
import { HomeComponent } from './arces/pages/home/home.component';
import { HomeTwoComponent } from './arces/pages/home-two/home-two.component';
import { HomeThreeComponent } from './arces/pages/home-three/home-three.component';
import { HomeFourComponent } from './arces/pages/home-four/home-four.component';
import { HomeFiveComponent } from './arces/pages/home-five/home-five.component';
import { LegalComponent } from './arces/pages/legal/legal.component';
import { ListingDetailOneComponent } from './arces/pages/listing-detail-one/listing-detail-one.component';
import { ListingDetailTwoComponent } from './arces/pages/listing-detail-two/listing-detail-two.component';
import { ListingDetailThreeComponent } from './arces/pages/listing-detail-three/listing-detail-three.component';
import { ListingGridComponent } from './arces/pages/listing-grid/listing-grid.component';
import { ListingListComponent } from './arces/pages/listing-list/listing-list.component';
import { ListingMapComponent } from './arces/pages/listing-map/listing-map.component';
import { LoginComponent } from './arces/pages/login/login.component';
import { PricingComponent } from './arces/pages/pricing/pricing.component';
import { ProfileComponent } from './arces/pages/profile/profile.component';
import { ProfileListingComponent } from './arces/pages/profile-listing/profile-listing.component';
import { ProfileSavedListingComponent } from './arces/pages/profile-saved-listing/profile-saved-listing.component';
import { RegisterComponent } from './arces/pages/register/register.component';
import { ServicesComponent } from './arces/pages/services/services.component';
import { SubmitListingComponent } from './arces/pages/submit-listing/submit-listing.component';
import { HeaderComponent } from './arces/layouts/header/header.component';
import { HeaderTwoComponent } from './arces/layouts/header-two/header-two.component';
import { HeaderThreeComponent } from './arces/layouts/header-three/header-three.component';
import { HeaderFourComponent } from './arces/layouts/header-four/header-four.component';
import { FooterComponent } from './arces/layouts/footer/footer.component';
import { FooterTwoComponent } from './arces/layouts/footer-two/footer-two.component';
import { FooterThreeComponent } from './arces/layouts/footer-three/footer-three.component';
import { BlogSidebarComponent } from './arces/layouts/blog-sidebar/blog-sidebar.component';
import { ListingSidebarComponent } from './arces/layouts/listing-sidebar/listing-sidebar.component';
import { PreloaderComponent } from './arces/layouts/preloader/preloader.component';
import { HeaderFiveComponent } from './arces/layouts/header-five/header-five.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { NgxPaginationModule } from 'ngx-pagination';
import { ForgotpasswordComponent } from './arces/pages/forgotpassword/forgotpassword.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    AboutComponent,
    AgencyComponent,
    AgencyDetailComponent,
    AgentComponent,
    AgentDetailComponent,
    BlogGridComponent,
    BlogListComponent,
    BlogSingleComponent,
    ComingSoonComponent,
    CompareListingComponent,
    ContactComponent,
    FaqComponent,
    HomeComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    HomeFourComponent,
    HomeFiveComponent,
    LegalComponent,
    ListingDetailOneComponent,
    ListingDetailTwoComponent,
    ListingDetailThreeComponent,
    ListingGridComponent,
    ListingListComponent,
    ListingMapComponent,
    LoginComponent,
    PricingComponent,
    ProfileComponent,
    ProfileListingComponent,
    ProfileSavedListingComponent,
    RegisterComponent,
    ServicesComponent,
    SubmitListingComponent,
    HeaderComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    HeaderFourComponent,
    FooterComponent,
    FooterTwoComponent,
    FooterThreeComponent,
    BlogSidebarComponent,
    ListingSidebarComponent,
    PreloaderComponent,
    HeaderFiveComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SlickCarouselModule
  ],
  providers: [
    APIsService,
    AuthGuard,{
      provide : HTTP_INTERCEPTORS,
      useClass : TokeInterceptorService,
      multi : true,
    },
      Location, {
        provide: LocationStrategy,
        useClass: PathLocationStrategy
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  SlickCarouselModule
}
