import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailComponent } from './components/detail/detail.component';
import { FeatureComponent } from './components/feature/feature.component';
import { PriceComponent } from './components/price/price.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ServiceComponent } from './components/service/service.component';
import { TeamComponent } from './components/team/team.component';
import { NavbarCarouselComponent } from './components/navbar-carousel/navbar-carousel.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FullScreenSearchComponent } from './components/full-screen-search/full-screen-search.component';
import { FactsComponent } from './components/facts/facts.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    DetailComponent,
    FeatureComponent,
    PriceComponent,
    QuoteComponent,
    ServiceComponent,
    TeamComponent,
    NavbarCarouselComponent,
    TopbarComponent,
    SpinnerComponent,
    FullScreenSearchComponent,
    FactsComponent,
    TestimonialComponent,
    VendorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
