import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/user';
import { Subscription } from 'rxjs/Subscription';
import { InHouseService } from 'app/services/inhouse.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscriber-search-result',
  templateUrl: './subscriber-search-result.component.html',
  styleUrls: ['./subscriber-search-result.component.css']
})
export class SubscriberSearchResultComponent implements OnInit {

  private subscription: Subscription;
  users: Array<User>;
  constructor(private inhouseService: InHouseService,
    private route: ActivatedRoute) {  }
  ngOnInit() {  }
  getSubscriber(searchParameters: string): void {
    this.users = [];
    this.inhouseService.getSubscribers(searchParameters).subscribe(users => {
      this.users = users;
    });
  }

}
