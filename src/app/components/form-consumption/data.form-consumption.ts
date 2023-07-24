export const months = [
  {id: 1,name: 'Enero'},
  {id: 2,name: 'Febrero'},
  {id: 3,name: 'Marzo'},
  {id: 4,name: 'Abril'},
  {id: 5,name: 'Mayo'},
  {id: 6,name: 'Junio'},
  {id: 7,name: 'Julio'},
  {id: 8,name: 'Agosto'},
  {id: 9,name: 'Septiembre'},
  {id: 10,name: 'Octubre'},
  {id: 11,name: 'Noviembre'},
  {id: 12,name: 'Diciembre'},
];

export class Check {

  check_month: string = '';
  check_service: string = '';
  check_owncheck: string = '';
  check_value: number = 0;
  id_wallet: number = 0;
  id_service: any;
  id_owncheck: any;

  constructor(){}
};
