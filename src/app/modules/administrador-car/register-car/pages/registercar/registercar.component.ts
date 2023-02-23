import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/core/alerts/alerts.service';
import { Automovil } from 'src/app/core/interfaces/automovil';


import { Claseautomovil } from 'src/app/core/models/claseautomovil';

import { Usuario } from 'src/app/core/models/usuario';
import { AutomovilService } from 'src/app/shared/services/automovil.service';
import { ClasesCarroService } from 'src/app/shared/services/clases-carro.service';
import { FotoService } from 'src/app/shared/services/foto.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-registercar',
  templateUrl: './registercar.component.html',
  styleUrls: ['./registercar.component.css']
})
export class RegistercarComponent {

  @Input() member: any = '';
  automovil: any;
  constructor(

    private AutomovilService: AutomovilService,
    private sharedServices: SharedService,
    private usuarioService: UsuarioService,
    private clasescarro: ClasesCarroService,
    private formbuilder2: FormBuilder,
    private formbuilder3: FormBuilder,
    private formbuilder: FormBuilder,
    private alert: AlertsService,
    private fotoService: FotoService
  ) { }

  alphanumericPattern = '^(?! )^[A-Za-z0-9 ]+$';
  numbersPattern = '^[0-9]+([.][0-9]+)?$';
  lettersPattern = '^(?! )^[A-Za-z ]+$';
  btnAddPrecios_ventas = false;
  btnAddunidades = false;
  clases: Claseautomovil[] = []; //array
  usuario: Usuario[] = []; //array

  clasesA = new Claseautomovil(); // obnjeto


  clases$!: Claseautomovil[];
  loading: boolean = false;
  AutomovilForm!: any;

  usuar = new Usuario();
  selectedPrice: any = [];
  selectedUnidad: any = [];
  showMe: boolean = false;
  priceForm!: FormGroup;
  unidadesForm!: FormGroup;
  precios: any[] = [];


  public data: any;
  file: any = '';
  selectedId = 0;
  image!: any;
  automoviles!: Automovil;


  values = [];
  listpreciosventa = Array<any>();
  listUnidadesMedidaauto = Array<any>();
  current_equivalencia!: string;

  public disabledButton = (): boolean => {
    return false;
  };

  //* Obtener dato especifico de las listas de precio y unidades e venta
  // console.log(this.listpreciosventa[0]['precio']);
  // console.log(this.listUnidadesProducto[0]['nombre']);
  deshabilitarMessage = false;

  selectCategoria(event: any) {
    const index = this.clases.indexOf(this.clases$[event.target.value]);
    this.clasesA = this.clases$[event.target.value];
    if (index < 0) this.clases.push(this.clasesA);
    // this.productoForm.patchValue({ categoria: '' });
  }

  delete(index: any, tipo: string) {
    if (index !== -1) {
      if (tipo == 'p') {
        this.clases.splice(index, 1);
        this.AutomovilForm.patchValue({ clases: this.clases$.indexOf(this.clases[this.clases.length - 1]) });
      } else {
        this.clases.splice(index, 1);
        this.AutomovilForm.patchValue({ clases: this.clases$.indexOf(this.clases[this.clases.length - 1]) });
      }
    }


    if (this.clases.length === 0) {
      this.AutomovilForm.patchValue({ clases: '' });
    }
  }

  loadForm() {
    this.AutomovilForm = this.formbuilder.group({
      modelo: ['', [Validators.required, Validators, Validators.maxLength(50)]],
      codigo: ['', [Validators.required, Validators.maxLength(25)]],
      placa: ['', [Validators.required, Validators.maxLength(25)]],
      estado: ['', Validators.required],
      color: ['', Validators.required],
      año: ['', [Validators.required, Validators.pattern(this.numbersPattern), Validators.maxLength(6)]],
      marca: ['', Validators.required],
      tipovehiculo: ['', Validators.required],
      codigoseguro: ['', Validators.required],
      clase: ['', Validators.required],

      imagen: [''],
    });
  }

  get formValues() {
    return this.AutomovilForm.controls;
  }

  // imageSelected(event: any): void {
  //   const file = event.target.files[0];
  //   this.image = file;
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //    this.file = reader.result;
  //   };
  // }

  resetRegistro() {
    this.loadForm();
    this.priceForm = this.formbuilder2.group({
      pricesDetails: this.formbuilder2.array([]),
    });
    this.unidadesForm = this.formbuilder3.group({
      unidadesDetails: this.formbuilder3.array([]),
    });
    this.populateData();
    this.showMe = false;
    this.clases = [];
    this.file = null;
    // this.productoForm.patchValue({ categoria: '', proveedor: '' });
  }

  sendProduct() {
    this.AutomovilService.addAutomovil(this.automovil).subscribe({
      next: (response) => console.log(response),
      complete: () => {
        this.loading = false;
        this.resetRegistro();
        this.alert.showSuccess('automovil registrado correctamente', 'Registro');
      },
      error: (error: any) => {
        this.alert.showError(error.message, 'Error registro');
        this.loading = false;
      },
    });
  }

  addProducto() {
    console.log('Falta validar?', this.AutomovilForm.valid);
    console.warn('Datos del producto a guardar', this.AutomovilForm.value);

    if (this.AutomovilForm.valid && this.unidadesForm.valid) {
      this.loading = true;
      this.cargarImagen();
      this.priceForm
        .get('pricesDetails')
        ?.value.map((obj: any) => this.listpreciosventa.push(obj));


      this.automovil = this.AutomovilForm.value;

      this.automovil.claseautomovil = this.clases;



      this.automovil.foto = this.nombre_orignal;
      // this.sharedServices.addimage(this.image, 'productos').subscribe({
      //   next: (img: string) => (this.producto.imagen = img),
      //   complete: () => this.sendProduct(),
      //   error: () => (this.loading = false),
      // });

      this.sendProduct();

    }
  }

  //! ngOnInit///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit(): void {

    this.clasescarro.getAll().subscribe((clases) => {
      this.clases$ = clases;
    });
    this.loadForm();
    this.priceForm = this.formbuilder2.group({
      pricesDetails: this.formbuilder2.array([]),
    });
    this.unidadesForm = this.formbuilder3.group({
      unidadesDetails: this.formbuilder3.array([]),
    });
  }

  //* Agregar precios de venta //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  get pricesDetails(): any {
    return this.priceForm.get('pricesDetails') as FormArray;
  }

  onAdad() {
    this.priceForm.valueChanges.subscribe(() => {
   //   this.btnAddPrecios_ventas = this.priceForm.invalid || this.formValues.precio_compra.value > this.priceForm.get('pricesDetails')?.value[this.pricesDetails.controls.length - 1]?.valor;
    });
    if (!this.btnAddPrecios_ventas) {
      this.btnAddPrecios_ventas = true;
      this.pricesDetails.push(this.addControls());
    }
  }

  onDelete(index: any) {
    this.btnAddPrecios_ventas = false;
    if (index.length < 1) {
      return;
    }
    this.pricesDetails.controls.splice(index - 1, 1);
  }

  onSubmit() {
    this.data = JSON.stringify(this.pricesDetails.value);
  }

  priceDetailsControls(index: number) {
    // console.log(index);
    return this.pricesDetails.controls[index]['controls'];
  }

  public addControls() {
    return new FormGroup({
      precio: new FormControl('', [
        Validators.required,
        Validators.pattern(this.lettersPattern),
      ]),
      valor: new FormControl('', [
        Validators.pattern(this.numbersPattern),
        Validators.required, Validators.maxLength(4)
      ]),
    });
  }

  private populateData() {
    this.values.forEach((data, index) => {
      this.onAdad();
      this.pricesDetails.controls[index].setValue(data);
    });
  }

  cambio(a: any) {
    this.btnAddPrecios_ventas = false;
    this.priceForm = this.formbuilder2.group({
      pricesDetails: this.formbuilder2.array([]),
    });
  }

  //? Agregar unidades con equivalencias////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  get unidadesDetails(): any {
    return this.unidadesForm.get('unidadesDetails') as FormArray;
  }

  onAdad2(valid: boolean, i: any) {
    console.log('indeeeex', i);
    this.unidadesForm.valueChanges.subscribe(() => {
      this.btnAddunidades = this.unidadesForm.invalid;
    });

    if (
      this.AutomovilForm.get('precio_compra')?.valid &&
      !this.btnAddunidades
    ) {
      this.btnAddunidades = false;
      this.unidadesDetails.push(this.addControlsUnidades());
    }
  }

  onDelete2(index: any) {
    if (this.unidadesDetails.controls.length < 2) {
      this.btnAddunidades = false;
      this.unidadesForm = this.formbuilder3.group({
        unidadesDetails: this.formbuilder3.array([]),
      });
      return;
    }
    if (this.unidadesForm.get('unidadesDetails')?.value[index]?.nombre) {
      if (this.unidadesForm.get('unidadesDetails')?.value[index - 1]?.nombre) {
        if (
          this.unidadesForm.get('unidadesDetails')?.value[index - 1]
            ?.equivalencia !=
          this.unidadesForm.get('unidadesDetails')?.value[index - 2]?.nombre
        ) {
          this.unidadesDetails.controls[index].patchValue({
            equivalencia:
              this.unidadesForm.get('unidadesDetails')?.value[index - 1]
                ?.nombre,
          });
        } else {
          if (
            this.unidadesForm.get('unidadesDetails')?.value[index + 1]?.nombre
          ) {
            this.unidadesDetails.controls[index].patchValue({
              equivalencia:
                this.unidadesForm.get('unidadesDetails')?.value[index - 2]
                  ?.nombre,
            });
          } else {
            if (
              this.unidadesForm.get('unidadesDetails')?.value[index + 1]?.nombre
            ) {
              this.unidadesDetails.controls[index].patchValue({
                equivalencia:
                  this.unidadesForm.get('unidadesDetails')?.value[index - 2]
                    ?.nombre,
              });
            }
          }
          this.current_equivalencia =
            this.unidadesForm.get('unidadesDetails')?.value[index - 1]?.nombre;
        }
      }
    } else {
      this.current_equivalencias = 'd';
    }
    this.current_equivalencia = '';

    this.unidadesDetails.controls.splice(index - 1, 1);

  }
  current_equivalencias = '';
  /////////////////////////////////////////////////////
  somethingChanged(event: any) {
    console.log(event.target.value);
  }

  unidadDetailsControls(index: number) {
    return this.unidadesDetails.controls[index]['controls'];
  }

  public addControlsUnidades() {
    this.btnAddunidades = true;

    if (!this.unidadesForm.get('unidadesDetails')?.value[0]?.nombre) {
      this.current_equivalencia = 'Unidad';
    } else {
      if (this.current_equivalencias == 'd') {
        console.log("Rrr")
        this.current_equivalencia =
          this.unidadesForm.get('unidadesDetails')?.value[
            this.unidadesForm.get('unidadesDetails')?.value.length - 1
          ]?.nombre;
      } else {
        if (this.current_equivalencia == '') {
          console.log("Este es")
          this.current_equivalencia =
            this.unidadesForm.get('unidadesDetails')?.value[
              this.unidadesForm.get('unidadesDetails')?.value.length - 1
            ]?.nombre;
        } else {
          console.log("Este")
          this.current_equivalencia =
            this.unidadesForm.get('unidadesDetails')?.value[
              this.unidadesForm.get('unidadesDetails')?.value.length - 1
            ]?.nombre;
        }
      }

    }

    return new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.pattern(this.alphanumericPattern),
      ]),
      equivalencia: new FormControl(this.current_equivalencia, [
        Validators.pattern(this.alphanumericPattern),
        Validators.required,
      ]),
      valor_equivalencia: new FormControl('', [
        Validators.pattern(this.numbersPattern),
        Validators.required, Validators.maxLength(4)
      ]),
    });
  }

  // IMAGEN

  message: string = "";
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  // CAPTURO EL ARCHIVO
  nombre_orignal: string = "";

  cap_nombre_archivo: any;
  selectedFile!: File;

  public imageSelected(event: any) {
    this.selectedFile = event.target.files[0];

    this.image = this.selectedFile;
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.file = reader.result;
    };

    console.log("Seleciono una imagen: " + event.target.value);
    this.cap_nombre_archivo = event.target.value;
    console.log("Numero de datos del nombre del archivo => " + this.cap_nombre_archivo.length)
    this.nombre_orignal = this.cap_nombre_archivo.slice(12);
    console.log("Nombre imagen original => " + this.nombre_orignal);
    console.log(this.nombre_orignal);
    this.automovil.foto = this.nombre_orignal;
  }

  cargarImagen() {
    this.fotoService.guararImagenes(this.selectedFile);
  }





}
