# PROYECTO BANCA PYTHON, REACT Y REACT NATIVE
## App para manejo de usuarios, clientes y transacciones bancarias
  documento: doc/Proyecto-banca-frontend.docx
  
  ver: https://github.com/wlopera/python_banca
  doc: https://github.com/wlopera/python_banca/doc/Proyecto-banca-backend.docx

Proyecto de estudio de un Banco que permite conectarse como administrador y generar usuarios, cuentas y transacciones y como usuario permite conectarse, consultar cuentas y realizar transacciones (Pagos y transferencias bancarias).

* Python: APIs de servicios
    * Usuarios
    * Clientes
    * Cuentas
    * Tipos
    * Transacciones
    * Tipo de transacciones

![image](https://github.com/wlopera/react_banca/assets/7141537/55067c77-7053-4e36-8bad-879c7509bbff)

Nota: MondoDB

* React: Web del banco
    * Admin:  administrar usuarios y cuentas 
    * Usuarios: Consulta y transacciones bancarias

![image](https://github.com/wlopera/react_banca/assets/7141537/c2278184-ea4d-4fbc-a799-e3f5b59f0aa4)

* React Native: Consulta y transacciones bancarias solo para usuarios
  
![image](https://github.com/wlopera/react_banca/assets/7141537/d78bf586-4cfa-4750-abc3-88afb48d819d)

## React - Frontend

Crear proyecto

![image](https://github.com/wlopera/react_banca/assets/7141537/4e64f160-8113-4589-baeb-0078d34ac485)

Subir servidor

![image](https://github.com/wlopera/react_banca/assets/7141537/ac36061e-3e4a-4c07-8cee-bf59e7af7a66)
![image](https://github.com/wlopera/react_banca/assets/7141537/a5d215d3-4c0e-4ec2-891f-2a4a507cdda3)

VSCODE: Depurar el código 

![image](https://github.com/wlopera/react_banca/assets/7141537/fb54fbe0-53e5-4931-b74f-6df2cc901145)
![image](https://github.com/wlopera/react_banca/assets/7141537/9c2ee5a4-dc82-4e23-9b17-05d61fc82bb9)


#### Código

Se crearon cuatro componentes importantes:

*  Header:  Cabecera de la Pantalla
*  Footer:    Mensajes de información al usuario y del sistema
*  Menu:     Area para agregar valores verticales de Menú (dinámico)
*  Body:    Cuerpo del programa. Este área varia a medida que se seleccione componentes del menú

Además se crearon componentes para el manejo de:
*  Table:  Tabla de información de usuarios
*  Modal: Modal genérico que permite en este caso modificar valores del usuario (tipo de usuario)

Uso de mobx para Tener un almacén común de datos (por ahora mensajes al usuario)

#### Librerías:
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.2",
    "mobx": "^6.12.4",
    "mobx-react": "^9.1.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"



Salida:

![image](https://github.com/wlopera/react_banca/assets/7141537/5e37d481-a70a-4a80-9cbf-03768335b576)

Manejo de estilos y colores

![image](https://github.com/wlopera/react_banca/assets/7141537/58587ae5-b963-47e8-8b34-d1eba428b986)

Mensajes de cambios en los usuarios

![image](https://github.com/wlopera/react_banca/assets/7141537/c6cacf2a-3093-4809-a447-b8465d04aa64)

Modal:

![image](https://github.com/wlopera/react_banca/assets/7141537/1dd74a72-6da0-47d9-8118-2f4fd60d6fa0)
![image](https://github.com/wlopera/react_banca/assets/7141537/ce9f6e59-510b-4d55-84c5-aa76baccdce1)

Manejo de errores:

![image](https://github.com/wlopera/react_banca/assets/7141537/57a1f296-7717-4dfa-aac3-94d0a5babcab)






