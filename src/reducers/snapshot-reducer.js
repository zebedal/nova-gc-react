

export const snapShotDataReducer = (state, action) => {

  
    if(action.type === 'volume') {
      return {
        ...action.payload
      }
    }
    if(action.type === 'valor') {

      const total1 = Math.round(+action.payload.TotalEmAbertoTCV);
      const total2 = Math.round(+action.payload.TotalEmCursoTCV);
      const total3 = Math.round(+action.payload.TotalComPropostaTCV)
      const refAberto = Math.round(+action.payload.TotalRefidelizacaoEmAbertoTCVVDF)
      const refCurso = Math.round(+action.payload.TotalRefidelizacaoEmCursoTCVVDF)
      const refProposta = Math.round(+action.payload.TotalRefidelizacaoComPropostaTCVVDF)

      return {
        panel1HeaderData: {
          total: total1.toLocaleString('pt-BR') + '€',
          novaReceitaVodafone: action.payload.TotalNovaReceitaEmAbertoTCVVDF,
          novaReceitaUser: action.payload.TotalNovaReceitaEmAbertoTCVUser,
          refidelizaçãoVodafone: refAberto.toLocaleString('pt-BR') + '€',
          refidelizaçãoUser: action.payload.TotalRefidelizacaoEmAbertoTCVUser,
          tcv: 67812
        },
        panel2HeaderData: {
          total: total2.toLocaleString('pt-BR') + '€',
          novaReceitaVodafone: action.payload.TotalNovaReceitaEmCursoTCVVDF,
          novaReceitaUser: action.payload.TotalNovaReceitaEmCursoTCVUser,
          refidelizaçãoVodafone: refCurso.toLocaleString('pt-BR') + '€',
          refidelizaçãoUser: action.payload.TotalRefidelizacaoEmCursoTCVUser,
          tcv: 2456782
        },
        panel3HeaderData: {
          total: total3.toLocaleString('pt-BR') + '€',
          novaReceitaVodafone: action.payload.TotalNovaReceitaComPropostaTCVVDF,
          novaReceitaUser: action.payload.TotalNovaReceitaComPropostaTCVUser,
          refidelizaçãoVodafone: refProposta.toLocaleString('pt-BR') + '€',
          refidelizaçãoUser: action.payload.TotalRefidelizacaoComPropostaTCVUser,
          tcv: 178213
        }
      }
    }
  }