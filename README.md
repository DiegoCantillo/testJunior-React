APPTEST DE PUBLICACIONES-->  APP para ver y hacer publicaiones en esta AppTest puedes iniciar sesion para ver el listado publicaciones,   y                            tamien poder divulgar tus publicaiones (solo podrás publicar si has iniciado sesión,)
                             tambn cuenta con una barra de navegacio sencilla donde facilmente puedes evidenciar has iniciado sesión.


dependencias utilizadas --> AXIOS para consumo de Api -> npm i axios
                            REACT ROUTER para manejo de rutass-> npm i react-router-dom
                            USEFORM para-> controlar el valor de los input -> npm install react-hook-form
                            TOASTER para manejo de notificaciones -> npm install sonner 
                            REDUX- REDUXTOOLKIT para manejo o control de estados (global)--> npm install redux- npm install @reduxjs/toolkit


configuraciones --> customHooks para reutilizar la logica de estado
                    configuracion de redux para manejo de estados
                    la logica y consumo de la api se encuentra en una sola carperta 




INFORMES DURANTE EL DESARROLLO --> mediante el desarrollo del test.

        PROBLEMAS PRESENTADOS: "No se me creaba la publicación"
        SOLUCION DEL PROBLEMA: me costó un poco, pero fuí a la documentación y había una nota importante
                                "resource will not be really updated on the server but it will be faked as if", ahí 
                                me fijé que si se estaba creando pero solo es una breve simulación, y todos se crean con id = 101; es decir solo es falcificado.


        para la implementacion de redux me apoyé en la documetanción
