

export const snapShotDataReducer = (state, action) => {

  
    if(action.type === 'volume') {
      return {
        ...action.payload
      }
    }
    if(action.type === 'valor') {

      const total1 = +action.payload.TotalEmAbertoTCV.toFixed(2);
      const total2 = +action.payload.TotalEmCursoTCV.toFixed(2);
      const total3 = +action.payload.TotalComPropostaTCV.toFixed(2);

      return {
        panel1HeaderData: {
          total: total1.toLocaleString('en-US'),
          novaReceitaVodafone: action.payload.TotalNovaReceitaEmAbertoTCVVDF,
          novaReceitaUser: action.payload.TotalNovaReceitaEmAbertoTCVUser,
          refidelizaçãoVodafone: action.payload.TotalRefidelizacaoEmAbertoTCVVDF,
          refidelizaçãoUser: action.payload.TotalRefidelizacaoEmAbertoTCVUser,
          tcv: 67812
        },
        panel2HeaderData: {
          total: total2.toLocaleString('en-US'),
          novaReceitaVodafone: action.payload.TotalNovaReceitaEmCursoTCVVDF,
          novaReceitaUser: action.payload.TotalNovaReceitaEmCursoTCVUser,
          refidelizaçãoVodafone: action.payload.TotalRefidelizacaoEmCursoTCVVDF,
          refidelizaçãoUser: action.payload.TotalRefidelizacaoEmCursoTCVUser,
          tcv: 2456782
        },
        panel3HeaderData: {
          total: total3.toLocaleString('en-US'),
          novaReceitaVodafone: action.payload.TotalNovaReceitaComPropostaTCVVDF,
          novaReceitaUser: action.payload.TotalNovaReceitaComPropostaTCVUser,
          refidelizaçãoVodafone: action.payload.TotalRefidelizacaoComPropostaTCVVDF,
          refidelizaçãoUser: action.payload.TotalRefidelizacaoComPropostaTCVUser,
          tcv: 178213
        }
      }
    }
  }