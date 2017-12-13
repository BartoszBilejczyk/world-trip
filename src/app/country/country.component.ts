import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { CountriesService } from "../services/countries.service";
import { ActivatedRoute } from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {
  countries: any;
  countryName;

  constructor(
    private countriesService: CountriesService,
    private route: ActivatedRoute
  ) {
    const sub = this.route.url.subscribe(url => {
      this.countryName = url[1].path;
      console.log(this.countryName)
    });
  }

  ngOnChanges() {
    console.log('ngOnChanges')
  }

  ngOnInit() {
    this.countriesService.getCountries().subscribe(countries => {
      console.log(countries);
      this.countries = countries.filter(country => country.name.toLowerCase() === this.countryName);
      console.log(this.countries);
    });
    console.log('ngOnInit')
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }

}
