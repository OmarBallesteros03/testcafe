import { Selector } from 'testcafe';

fixture('Registro de estudiantes')
  .page('http://localhost:5500/index.html');

test('Formulario para registrar estudiante y comprobar que fue ingresado', async t => {
  await t
    .typeText('#nombres', 'John Smith')
    .typeText('#numeroCuenta', '20201254')
    .typeText('#contraseña', 'hola23_aa')
    .click('input[type="submit"]')
    .expect(Selector('#infoEstudiante').find('p').nth(0).innerText).eql('Nombre: John Smith')
    .expect(Selector('#infoEstudiante').find('p').nth(1).innerText).eql('Número de Cuenta: 20201254')
    .expect(Selector('#infoEstudiante').find('p').nth(2).innerText).eql('Contraseña: hola23_aa');
});

test('Verificación de ingreso de estudiante en array', async t => {
  await t
    .typeText('#nombres', 'John Smith')
    .typeText('#numeroCuenta', '20201254')
    .typeText('#contraseña', 'hola23_aa')
    .click('input[type="submit"]');

  const arrEstudiantes = await t.eval(() => estudiantes);

  await t.expect(arrEstudiantes.length).eql(1)
    .expect(arrEstudiantes[0]['nombres']).eql('John Smith')
    .expect(arrEstudiantes[0]['numCuenta']).eql('20201254')
    .expect(arrEstudiantes[0]['contraseña']).eql('hola23_aa');
});