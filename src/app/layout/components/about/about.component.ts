import { Component, OnInit, Optional, Inject } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { GeneratorService, Generator, GeneratorFactory } from 'src/app/core/services/generator.service';
import { ConstantService } from 'src/app/core/services/constant.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    GeneratorService,
    { provide: Generator, useFactory: GeneratorFactory(8), deps: [GeneratorService] }
  ]
})
export class AboutComponent implements OnInit {

  constructor(
    @Optional() private storage: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private constantService: ConstantService,
    @Optional() @Inject(Generator) private generatorService: GeneratorService
    ) {}

  ngOnInit() {
    this.storage.setItem('item', 'value');
    console.log(this.storage.getItem('item'));
    this.storage.removeItem('item');

    this.configOptionsService.setObjSettings({id: 3});
    this.configOptionsService.objSettings.id = 5;
    this.configOptionsService.objSettings.email = 'Email';
    console.log(this.configOptionsService.getObjSettings());

    console.log(this.constantService);

    console.log(this.generatorService);
  }
}
