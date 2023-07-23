export const typesServices = [
  { id: 1, name_type: 'agua'},
  { id: 2, name_type: 'luz'},
  { id: 3, name_type: 'gas'},
  { id: 4, name_type: 'internet'}
];

export class Service {

  service_name: string = '';
  service_nro_client: string = '';
  service_type: string = '';

  constructor(){}
}
