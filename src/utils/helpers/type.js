export function transformType( type ) {
  type.name = type.name.charAt( 0 ).toUpperCase() + type.name.slice( 1 );

  return type;
};
