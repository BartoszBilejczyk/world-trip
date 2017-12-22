import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
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

  ngOnInit() {
    this.countriesService.getCountries().subscribe(countries => {
      console.log(countries);
      this.countries = countries.filter(country => country.name.toLowerCase() === this.countryName);
      console.log(this.countries);
    });
    console.log('ngOnInit')
  }
}
