import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './arces/pages/home/home.component';
import { HomeTwoComponent } from './arces/pages/home-two/home-two.component';
import { HomeThreeComponent } from './arces/pages/home-three/home-three.component';
import { HomeFourComponent } from './arces/pages/home-four/home-four.component';
import { HomeFiveComponent } from './arces/pages/home-five/home-five.component';
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
import { LegalComponent } from './arces/pages/legal/legal.component';
import { ListingGridComponent } from './arces/pages/listing-grid/listing-grid.component';
import { ListingListComponent } from './arces/pages/listing-list/listing-list.component';
import { ListingMapComponent } from './arces/pages/listing-map/listing-map.component';
import { ListingDetailOneComponent } from './arces/pages/listing-detail-one/listing-detail-one.component';
import { ListingDetailTwoComponent } from './arces/pages/listing-detail-two/listing-detail-two.component';
import { ListingDetailThreeComponent } from './arces/pages/listing-detail-three/listing-detail-three.component';
import { LoginComponent } from './arces/pages/login/login.component';
import { RegisterComponent } from './arces/pages/register/register.component';
import { PricingComponent } from './arces/pages/pricing/pricing.component';
import { ProfileComponent } from './arces/pages/profile/profile.component';
import { ProfileListingComponent } from './arces/pages/profile-listing/profile-listing.component';
import { ProfileSavedListingComponent } from './arces/pages/profile-saved-listing/profile-saved-listing.component';
import { ServicesComponent } from './arces/pages/services/services.component';
import { SubmitListingComponent } from './arces/pages/submit-listing/submit-listing.component';
import { ErrorComponent } from './arces/pages/error/error.component';
import { AuthGuard } from './auth.guard';
import { ForgotpasswordComponent } from './arces/pages/forgotpassword/forgotpassword.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'home-v2',canActivate : [AuthGuard],component:HomeTwoComponent},
  {path:'home-v3',component:HomeThreeComponent},
  {path:'home-v4',component:HomeFourComponent},
  {path:'home-v5',component:HomeFiveComponent},
  {path:'about',component:AboutComponent},
  {path:'agency',component:AgencyComponent},
  {path:'agency-detail',canActivate : [AuthGuard],component:AgencyDetailComponent},
  {path:'agent',component:AgentComponent},
  {path:'agent-detail',component:AgentDetailComponent},
  {path:'blog-grid',component:BlogGridComponent},
  {path:'blog-list',component:BlogListComponent},
  {path:'blog-single',component:BlogSingleComponent},
  {path:'coming-soon',component:ComingSoonComponent},
  {path:'compare-listing',component:CompareListingComponent},
  {path:'contact',component:ContactComponent},
  {path:'faq',component:FaqComponent},
  {path:'legal',component:LegalComponent},
  {path:'listing-grid',component:ListingGridComponent},
  {path:'listing-list',component:ListingListComponent},
  {path:'listing-map',component:ListingMapComponent},
  {path:'listing-map/:mlsno',component:ListingMapComponent},
  {path:'listing-detail-v1/:propid/:refno',component:ListingDetailOneComponent},
  {path:'listing-detail-v2',component:ListingDetailTwoComponent},
  {path:'listing-detail-v3',component:ListingDetailThreeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'pricing',component:PricingComponent},
  {path:'profile/:id',canActivate : [AuthGuard],component:ProfileComponent},
  {path:'profile-listing',canActivate : [AuthGuard],component:ProfileListingComponent},
  {path:'profile-saved-listing',component:ProfileSavedListingComponent},
  {path:'services',component:ServicesComponent},
  {path:'submit-listing',component:SubmitListingComponent},
  {path:'forgetpassoword',component:ForgotpasswordComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
