import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks-parent',
  templateUrl: './hooks-parent.component.html',
  styleUrls: ['./hooks-parent.component.css']
})
export class HooksParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'LifecycleHook';

  inputText: string = '';
  destroy: boolean = true;

  OnSubmit(inputEl: HTMLInputElement){
    this.inputText = inputEl.value;
  }

  DestroyComponent(){
    this.destroy = false;
  }

}