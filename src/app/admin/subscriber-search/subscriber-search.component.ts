import { User } from './../../model/user';
import { InHouseService } from './../../services/inhouse.service';
import { ApiAccountRegisterService } from 'app/services/api-account-register.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscriber-search',
  templateUrl: './subscriber-search.component.html',
  styleUrls: ['./subscriber-search.component.css']
})
export class SubscriberSearchComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  users: Array<User>;
  displayResult: boolean;

  constructor(private inhouseService: InHouseService,
    private route: ActivatedRoute,
    private router: Router  ) {}

  ngOnInit(  ) {
 //   this.getSubscriber(this.route.snapshot.params['searchParameters']);
  }
  onDisplayResult() {
this.displayResult = true;
  }
  getSubscriber(searchParameters: string): void {
    this.users = [];
    this.inhouseService.getSubscribers(searchParameters).subscribe(users => {
      this.users = users;
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
