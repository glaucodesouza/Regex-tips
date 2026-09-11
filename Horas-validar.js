            // INI VALIDAR HORA INICIO e HORA FIM
            let sHoraInicio = oView.byId("inpHoraInicioCriar").getValue() === "" ? null : oView.byId("inpHoraInicioCriar").getValue();
            let sHoraFim = oView.byId("inpHoraFimCriar").getValue() === "" ? null : oView.byId("inpHoraFimCriar").getValue();
            
            let oInputHoraInicio = oView.byId("inpHoraInicioCriar");
            let oInputHoraFim = oView.byId("inpHoraFimCriar");

            // Valida:
            // HH entre 00 e 23.
            // MM entre 00 e 59.
            // Como funciona este REGEX abaixo?
            // Parte 1: ([01]\d|2[0-3])
            //[01], aceita apenas 0 ou 1
            //\d, aceita qualquer dígito de 0 a 9
            //|, ou
            //2[0-3], aceita valores de 20 até 23.
            // Parte 2: [0-5]\d
            // [0-5]\d, aceita de 0 até 59.
            let bHoraInicioValida =
                sHoraInicio === null ||
                /^([01]\d|2[0-3]):[0-5]\d$/.test(sHoraInicio);

            // Valida:
            // HH entre 00 e 23.
            // MM entre 00 e 59.
            let bHoraFimValida =
                sHoraFim === null ||
                /^([01]\d|2[0-3]):[0-5]\d$/.test(sHoraFim);

            oInputHoraInicio.setValueState(
                bHoraInicioValida ? "None" : "Error"
            );

            oInputHoraInicio.setValueStateText(
                bHoraInicioValida
                    ? ""
                    : "Informe uma hora válida entre 00:00 e 23:59."
            );

            oInputHoraFim.setValueState(
                bHoraFimValida ? "None" : "Error"
            );

            oInputHoraFim.setValueStateText(
                bHoraFimValida
                    ? ""
                    : "Informe uma hora válida entre 00:00 e 23:59."
            );

            if (!bHoraInicioValida || !bHoraFimValida) {
                MessageToast.show("Revise os horários informados.");
                return;
            }
            // FIM VALIDAR HORA INICIO e HORA FIM
