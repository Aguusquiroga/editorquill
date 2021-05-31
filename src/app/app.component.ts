import { Component } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import {FormsModule} from '@angular/forms';
import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlName } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'editorCk';
  editorText = "";

  ngOnInit(){


  }
  changedEditor(event: EditorChangeContent | EditorChangeSelection){
    console.log('estas escribiendo'+event);
    this.editorText=event['editor']['root']['innerHTML'];
  }


  }



