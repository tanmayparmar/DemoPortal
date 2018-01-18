import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriber-unregistered',
  templateUrl: './subscriber-unregistered.component.html',
  styleUrls: ['./subscriber-unregistered.component.css']
})
export class SubscriberUnregisteredComponent implements OnInit {
  closeResult: string;
  registrationCodeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    router: Router,
    private modalService: NgbModal
  ) {
    this.registrationCodeGenerateForm();
  }

  ngOnInit() {}

  open(content) {
    this.modalService.open(content).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  registrationCodeGenerateForm() {

  }
}
