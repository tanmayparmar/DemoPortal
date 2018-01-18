import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SubscriberService } from 'app/services/subscriber.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'app/model/user';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  users: Array<User>;

  constructor(
    private router: Router,
    private subscriberService: SubscriberService,
    private route: ActivatedRoute,
    public translate: TranslateService,

  ) {}

  ngOnInit() {
    this.getUserDetails(this.route.snapshot.params['2FN2yUv8W5qZV6IkRIdY5A==']);
  }

  getUserDetails(sId): void {
    this.users = [];
    this.subscriberService.getSubscriberDashboard(sId).subscribe(
      users => {
        this.users = users;
        console.log('workingggggggggggggg');
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
