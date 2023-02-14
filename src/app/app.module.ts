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
import { CcParentComponent, CcParentComponent } from './PROCADEMY/ContentChild/cc-parent/cc-parent.component';
import { CcChildComponent } from './PROCADEMY/ContentChild/cc-child/cc-child.component';
import { SetbackgroundDirective } from './PROCADEMY/CustomDirective/setbackground.directive';
import { CdParentComponent } from './PROCADEMY/CustomDirective/cd-parent/cd-parent.component';
import { HighlightDirective } from './PROCADEMY/CustomDirective/highlight.directive';
import { HoverDirective } from './PROCADEMY/CustomDirective/hover.directive';


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
    //hostListener
    HoverDirective,


  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
ngModule

NgModule is a decorator function that takes a single metadata object whose properties describe the module.

1. `Declarations →` List of custom components, pipes and directives.
2. `Imports →` List of other modules required by the application.
    
    The module’s imports array tells Angular about specific Angular modules —Classes decorated with @NgModule —that the application needs to function properly.
  
    imports: [
    BrowserModule,AppRoutingModule,FormsModule,HttpClientModule,
    CustomersModule,ReactiveFormsModule
    ],
    
3. `Providers →` List of services injected in the Root component.
4. `Bootstrap →` Name of Root component(s).
*/
