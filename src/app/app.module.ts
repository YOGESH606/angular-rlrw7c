import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OnChangeComponent } from './OWN_SPACE/lifecyclehooks/onchange/onchange.component';
import { OnInitComponent } from './OWN_SPACE/lifecyclehooks/oninit/oninit.component';
import { DoCheckComponent } from './OWN_SPACE/lifecyclehooks/docheck/docheck.component';
import { ChangeDetectComponent } from './OWN_SPACE/lifecyclehooks/docheck/changeDetect.component';
import { AfterContentInitComponent } from './OWN_SPACE/lifecyclehooks/aftercontentinit/afterContentInit.component';
import { ChildComponent } from './OWN_SPACE/lifecyclehooks/aftercontentinit/child.component';
import { AfterViewInitComponent } from './OWN_SPACE/lifecyclehooks/afteviewinit/afterViewInit.component';
import { Child1Component } from './OWN_SPACE/lifecyclehooks/afteviewinit/child1.component';
import { ngmodelComponent } from './OWN_SPACE/ngmodel/ngmodel.component';
import { DataBindingComponent } from './OWN_SPACE/componentInteraction/dataBinding.component';
import { WriterComponent } from './OWN_SPACE/viewchild_viewchildrean/writer.component';
import { VCOneDemoComponent } from './OWN_SPACE/viewchild_viewchildrean/demo1.component';
import { ngClassComponent } from './OWN_SPACE/ngclass/ngclass.component';
import { ParentComponent } from './PROCADEMY/TemplateReference/parent/parent.component';
import { DemoComponent } from './PROCADEMY/TemplateReference/demo/demo.component';
import { CustomerListComponent } from './PROCADEMY/TemplateReference/customer-list/customer-list.component';
import { VCChildComponent } from './PROCADEMY/ViewChild/vc-child/vc-child.component';
import { VCParentComponent } from './PROCADEMY/ViewChild/vc-parent/vc-parent.component';
import { CBParentComponent } from './PROCADEMY/CustomBinding/cb-parent/cb-parent.component';
import { HeaderComponent } from './PROCADEMY/CustomBinding/header/header.component';
import { FilterComponent } from './PROCADEMY/CustomBinding/filter/filter.component';
import { CourcesComponent } from './PROCADEMY/CustomBinding/courses/courses.component';
import { SearchComponent } from './PROCADEMY/CustomBinding/search/search.component';
import { VEComp1Component } from './PROCADEMY/ViewEncapsulation/ve-comp1/ve-comp1.component';
import { VEComp2Component } from './PROCADEMY/ViewEncapsulation/ve-comp2/ve-comp2.component';
import { VEComp3Component } from './PROCADEMY/ViewEncapsulation/ve-comp3/ve-comp3.component';
import { NgContentParentComponent } from './PROCADEMY/ngContent/ng-content-parent/ng-content-parent.component';
import { NgContentChildComponent } from './PROCADEMY/ngContent/ng-content-child/ng-content-child.component';
import { HooksParentComponent } from './PROCADEMY/Hooks/hooks-parent/hooks-parent.component';
import { HooksDemoComponent } from './PROCADEMY/Hooks/hooks-demo/hooks-demo.component';
import { CcParentComponent } from './PROCADEMY/ContentChild/cc-parent/cc-parent.component';
import { CcChildComponent } from './PROCADEMY/ContentChild/cc-child/cc-child.component';
import { SetbackgroundDirective } from './PROCADEMY/CustomDirective/setbackground.directive';
import { CdParentComponent } from './PROCADEMY/CustomDirective/cd-parent/cd-parent.component';
import { HighlightDirective } from './PROCADEMY/CustomDirective/highlight.directive';
import { HoverDirective } from './PROCADEMY/CustomDirective/hover.directive';
import { BetterHighlightDirective } from './PROCADEMY/CustomDirective/better-highlight.directive';
import { ClassDirective } from './PROCADEMY/CustomDirective/class.directive';
import { DeParentComponent } from './PROCADEMY/DirectiveExample/de-parent/de-parent.component';
import { DeHighlightDirective } from './PROCADEMY/DirectiveExample/de-parent/de-highlight.directive';
import { StyleDirective } from './PROCADEMY/CustomDirective/style.directive';
import { IfDirective } from './PROCADEMY/CustomDirective/if.directive';
import { EnrollService } from './PROCADEMY/subscribe-service/services/enroll.service';
import { AngularComponent } from './PROCADEMY/subscribe-service/angular/angular.component';
import { JavascriptComponent } from './PROCADEMY/subscribe-service/javascript/javascript.component';
import { SubscribeServiceComponent } from './PROCADEMY/subscribe-service/subscribe-service.component';
import { AdduserComponent } from './PROCADEMY/user-service/adduser/adduser.component';
import { UserService } from './PROCADEMY/user-service/services/user.service';
import { UserServiceComponent } from './PROCADEMY/user-service/user-service.component';
import { LoggerService } from './PROCADEMY/user-service/services/logger.service';
import { UserServiceDetails } from './PROCADEMY/user-detail-service/services/user.service';
import { AllUsersComponent } from './PROCADEMY/user-detail-service/all-users/all-users.component';
import { UserDetailComponent } from './PROCADEMY/user-detail-service/user-detail/user-detail.component';
import { UserDetailServiceComponent } from './PROCADEMY/user-detail-service/user-detail-service.component';
import { AngularObservablesComponent } from './PROCADEMY/angular-observables/angular-observables.component';
import { DataService } from './PROCADEMY/obserables-subject/data.service';
import { Comp2Component } from './PROCADEMY/obserables-subject/comp2/comp2.component';
import { Comp1Component } from './PROCADEMY/obserables-subject/comp1/comp1.component';
import { ObserablesSubjectComponent } from './PROCADEMY/obserables-subject/obserables-subject.component';




@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    OnChangeComponent,
    OnInitComponent,
    DoCheckComponent,
    ChangeDetectComponent,
    AfterContentInitComponent,
    ChildComponent,
    AfterViewInitComponent,
    Child1Component,
    ngmodelComponent,
    DataBindingComponent,
    WriterComponent,
    VCOneDemoComponent,
    ngClassComponent,
    //templateReference
    ParentComponent,
    DemoComponent,
    CustomerListComponent,
    //viewChild
    VCChildComponent,
    VCParentComponent,
    //customBinding
    CBParentComponent,
    HeaderComponent,
    FilterComponent,
    CourcesComponent,
    SearchComponent,
    //ViewEncapulation
    VEComp1Component,
    VEComp2Component,
    VEComp3Component,
    //ngContent
    NgContentParentComponent,
    NgContentChildComponent,
    //Hooks
    HooksParentComponent,
    HooksDemoComponent,
    //contentChild
    CcParentComponent,
    CcChildComponent,
    //Custom Directive
    SetbackgroundDirective,
    CdParentComponent,
    //renderer
    HighlightDirective,
    //@HostListener
    HoverDirective,
    //@HostBinding
    BetterHighlightDirective,
    //custom appclass directive
    ClassDirective,
    //Condtional Directive in angulR
    DeParentComponent,
    DeHighlightDirective,
    //Custom Appstyle Directive
    StyleDirective,
    //Custom structural Directive
    IfDirective,
    //Creating a service
    AngularComponent,
    JavascriptComponent,
    SubscribeServiceComponent,
    //Creating data service
    AdduserComponent,
    UserServiceComponent,
    //Component interaction with service
    AllUsersComponent,
    UserDetailComponent,
    UserDetailServiceComponent,
    //Observable in Angular
    AngularObservablesComponent,
    //observables-subject in angular
    Comp1Component,
    Comp2Component,
    ObserablesSubjectComponent,


  ],
  providers: [EnrollService, UserService, LoggerService, UserServiceDetails,DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
ngModule

NgModule is a decorator function that takes a single metadata object whose properties describe the module.

1. `Declarations ???` List of custom components, pipes and directives.
2. `Imports ???` List of other modules required by the application.
    
    The module???s imports array tells Angular about specific Angular modules ???Classes decorated with @NgModule ???that the application needs to function properly.
  
    imports: [
    BrowserModule,AppRoutingModule,FormsModule,HttpClientModule,
    CustomersModule,ReactiveFormsModule
    ],
    
3. `Providers ???` List of services injected in the Root component.
4. `Bootstrap ???` Name of Root component(s).
*/
