import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'policy-coverage',
  templateUrl: './policy-coverage.component.html',
  styleUrls: ['./policy-coverage.component.scss'],
})
export class PolicyCoverageComponent implements OnInit {
  public folder: string;
  public selectedIndex: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.selectedIndex = 0
  }

}
