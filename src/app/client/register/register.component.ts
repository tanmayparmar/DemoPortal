import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { User } from './../../model/user';
import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from 'app/services/account.service';
import { Subscription } from 'rxjs/Subscription';
import { ApiAccountRegisterService } from 'app/services/api-account-register.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  showIndividual: boolean;
  showBusiness: boolean;
  closeResult: string;
  registrationCodeForm: FormGroup;
  @Input() user: User;
  registerUser: User;

  userInformation: User[] = [];
  private subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private modalService: NgbModal,
    private apiaccountregisterService: ApiAccountRegisterService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
        this.createForm();
    this.createRegistrationCodeForm();
  }

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
  createForm() {
    this.registerForm = this.fb.group({
    //  customerType: [''],
      firstName: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(50)])
      ],
      lastName: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(50)])
      ],
      planNumber: ['', Validators.compose([Validators.maxLength(50)])],
      idNumber: ['', Validators.compose([Validators.maxLength(50)])],
      postalCode: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(50)])
      ],
      businessName: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(50)])
      ]
    });
  }
  createRegistrationCodeForm() {
    this.registrationCodeForm = this.fb.group({
      registrationCode: ['', Validators.required, Validators.maxLength(50)]
    });
  }
  ngOnInit() {
    this.user = <User>{};
  }
  onIndividual() {
    this.showIndividual = true;
    this.showBusiness = false;
  }
  onBusiness() {
    this.showIndividual = false;
    this.showBusiness = true;
  }
  onFormSubmit() {  }

  btnSubmit() {
    this.subscription = this.apiaccountregisterService
    .postAccountSubscriber(this.registerForm.value)
    .subscribe((registerUser) => {
      console.log(registerUser);
    //  this.registerForm.reset();
    });
    this.router.navigateByUrl('/register2');
  };

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private handleError (error: any) {
    console.log(error);
    return Observable.throw(error);
  }
}
