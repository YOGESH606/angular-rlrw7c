import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'changedetect',
  templateUrl: './changeDetect.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush, //->changes detect when only reference are changed like obj = {}
})
export class ChangeDetectComponent {
  count: number = 0;

  constructor(private cdr: ChangeDetectorRef) {
    setInterval(() => {
      this.count++; // here we changing into the same reference (reference is not changing)
      this.cdr.markForCheck();
    }, 1000);
  }

  detach(): void {
    this.cdr.detach();
  }

  reattach(): void {
    this.cdr.reattach();
  }

  detect(): void {
    this.cdr.detectChanges();
  }
}

/* 
Base class that provides change detection functionality. A change-detection tree collects all views that are to be checked for changes. Use the methods to add and remove views from the tree, initiate change-detection, and explicitly mark views as dirty, meaning that they have changed and need to be re-rendered.

 abstract class ChangeDetectorRef {
  abstract markForCheck(): void
  abstract detach(): void
  abstract detectChanges(): void
  abstract checkNoChanges(): void
  abstract reattach(): void
}
1. markForCheck() -> When a view uses the OnPush (checkOnce) change detection strategy, explicitly marks the view as changed so that it can be checked again.
2. detach() -> Detaches this view from the change-detection tree. A detached view is not checked until it is reattached.
3. detectChanges() -> Checks this view and its children. Use in combination with detach to implement local change detection checks.
4. checkNoChanges() -> Checks the change detector and its children, and throws if any changes are detected.
5. reattach() -> Re-attaches the previously detached view to the change detection tree. Views are attached to the tree by default.

*/
