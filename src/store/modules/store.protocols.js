import axios from 'axios'
import _ from 'lodash'

let _protocols = {
  protocols: [
    {
      id: 1,
      name: 'A',

      required: {

      "type_milieu": {
        tab: 'first',
        "fullPath": false,
        "editable": true,
        "size": 6,
        "type": "Select",
        "fieldClass": "None col-md-6",
        "defaultValue": null,
        "title": "Type de milieu",
        "options": [
          {
            "val": "",
            "label": ""
          },
          {
            "val": "Autre",
            "label": "Autre"
          },
          {
            "val": "Cavité/Grotte",
            "label": "Cavité/Grotte"
          },
          {
            "val": "Etang/Mare/Marais",
            "label": "Etang/Mare/Marais"
          },
          {
            "val": "Forêt de conifères",
            "label": "Forêt de conifères"
          },
          {
            "val": "Forêt de feuillus",
            "label": "Forêt de feuillus"
          },
          {
            "val": "Forêt mixte",
            "label": "Forêt mixte"
          },
          {
            "val": "Haie/Friche/Lande",
            "label": "Haie/Friche/Lande"
          },
          {
            "val": "Mer/Océan",
            "label": "Mer/Océan"
          },
          {
            "val": "Milieu bocager",
            "label": "Milieu bocager"
          },
          {
            "val": "Milieu rupestre",
            "label": "Milieu rupestre"
          },
          {
            "val": "Milieu urbain/Bâtis",
            "label": "Milieu urbain/Bâtis"
          },
          {
            "val": "Plage/Vasière",
            "label": "Plage/Vasière"
          },
          {
            "val": "Plaine céréalière",
            "label": "Plaine céréalière"
          },
          {
            "val": "Prairie/Pâture",
            "label": "Prairie/Pâture"
          },
          {
            "val": "Rivière/Canal",
            "label": "Rivière/Canal"
          }
        ],
        "editorClass": "form-control",
        "editorAttrs": {
          "disabled": false
        },
        "name": "type_milieu",
        "validators": []
      },
      "comportement": {
        "fullPath": false,
        "editable": true,
        "size": 6,
        "type": "Select",
        "fieldClass": "None col-md-6",
        "defaultValue": null,
        "title": "Comportement/indice",
        "options": [
          {
            "val": "",
            "label": ""
          },
          {
            "val": "Accouplement",
            "label": "Accouplement"
          },
          {
            "val": "Alimentation",
            "label": "Alimentation"
          },
          {
            "val": "Autre",
            "label": "Autre"
          },
          {
            "val": "Chant/Parade",
            "label": "Chant/Parade"
          },
          {
            "val": "Cri/Alerte",
            "label": "Cri/Alerte"
          },
          {
            "val": "Mort",
            "label": "Mort"
          },
          {
            "val": "Pelotes/Traces",
            "label": "Pelotes/Traces"
          },
          {
            "val": "Repos/Halte",
            "label": "Repos/Halte"
          },
          {
            "val": "Vol (bifurcation)",
            "label": "Vol (bifurcation)"
          },
          {
            "val": "Vol (plongeon)",
            "label": "Vol (plongeon)"
          },
          {
            "val": "Vol (survol)",
            "label": "Vol (survol)"
          },
          {
            "val": "Vol (traversée)",
            "label": "Vol (traversée)"
          },
          {
            "val": "Vol ascendant",
            "label": "Vol ascendant"
          },
          {
            "val": "Vol de chasse",
            "label": "Vol de chasse"
          }
        ],
        "editorClass": "form-control",
        "editorAttrs": {
          "disabled": false
        },
        "name": "comportement",
        "validators": []
      },
      "nom_scientifique": {
        "fullPath": false,
        "editable": true,
        "size": 6,
        "type": "Text",
        "fieldClass": "None col-md-6",
        "defaultValue": null,
        "title": "Nom scientifique *",
        "options": "",
        "editorClass": "form-control",
        "editorAttrs": {
          "disabled": false
        },
        "name": "nom_scientifique",
        "validators": [
          "required"
        ]
      },
      "effectif": {
        "fullPath": false,
        "editable": true,
        "size": 6,
        "type": "Number",
        "fieldClass": "None col-md-6",
        "defaultValue": null,
        "title": "Effectif *",
        "options": "",
        "editorClass": "form-control",
        "editorAttrs": {
          "disabled": false
        },
        "name": "effectif",
        "validators": [
          "required"
        ]
      },
      "nom_vernaculaire": {
        "fullPath": false,
        "editable": true,
        "size": 6,
        "type": "Text",
        "fieldClass": "None col-md-6",
        "defaultValue": null,
        "title": "Nom vernaculaire *",
        "options": "",
        "editorClass": "form-control",
        "editorAttrs": {
          "disabled": false
        },
        "name": "nom_vernaculaire",
        "validators": [
          "required"
        ]
      },
      "hauteur_vol": {
        "fullPath": false,
        "editable": true,
        "size": 6,
        "type": "Select",
        "fieldClass": "None col-md-6",
        "defaultValue": null,
        "title": "Hauteur de vol",
        "options": [
          {
            "val": "",
            "label": ""
          },
          {
            "val": "H0",
            "label": "H0"
          },
          {
            "val": "H1",
            "label": "H1"
          },
          {
            "val": "H2",
            "label": "H2"
          },
          {
            "val": "H3",
            "label": "H3"
          }
        ],
        "editorClass": "form-control",
        "editorAttrs": {
          "disabled": false
        },
        "name": "hauteur_vol",
        "validators": []
      },
      "type_inventaire": {
        "fullPath": false,
        "editable": true,
        "size": 6,
        "type": "Select",
        "fieldClass": "None col-md-6",
        "defaultValue": null,
        "title": "Type d'inventaire *",
        "options": [
          {
            "val": "",
            "label": ""
          },
          {
            "val": "IPA",
            "label": "IPA"
          },
          {
            "val": "Observation fortuite",
            "label": "Observation fortuite"
          },
          {
            "val": "Point d'écoute nocturne",
            "label": "Point d'écoute nocturne"
          },
          {
            "val": "Point migration",
            "label": "Point migration"
          },
          {
            "val": "Transect",
            "label": "Transect"
          }
        ],
        "editorClass": "form-control",
        "editorAttrs": {
          "disabled": false
        },
        "name": "type_inventaire",
        "validators": [
          "required"
        ]
      },
      "code_atlas": {
        "fullPath": false,
        "editable": true,
        "size": 6,
        "type": "Select",
        "fieldClass": "None col-md-6",
        "defaultValue": null,
        "title": "Code atlas",
        "options": [
          {
            "val": "",
            "label": ""
          },
          {
            "val": "certain",
            "label": "certain"
          },
          {
            "val": "non",
            "label": "non"
          },
          {
            "val": "possible",
            "label": "possible"
          },
          {
            "val": "probable",
            "label": "probable"
          }
        ],
        "editorClass": "form-control",
        "editorAttrs": {
          "disabled": false
        },
        "name": "code_atlas",
        "validators": []
      },
      "sexe": {
        "fullPath": false,
        "editable": true,
        "size": 6,
        "type": "Select",
        "fieldClass": "None col-md-6",
        "defaultValue": null,
        "title": "Sexe",
        "options": [
          {
            "val": "",
            "label": ""
          },
          {
            "val": "?",
            "label": "?"
          },
          {
            "val": "couple",
            "label": "couple"
          },
          {
            "val": "femelle",
            "label": "femelle"
          },
          {
            "val": "juv/imm",
            "label": "juv/imm"
          },
          {
            "val": "mâle",
            "label": "mâle"
          }
        ],
        "editorClass": "form-control",
        "editorAttrs": {
          "disabled": false
        },
        "name": "sexe",
        "validators": []
      }

      },
      optional: [
        
      ],
    },{
      id: 2,
      name: 'D'
    },{
      id: 3,
      name: 'C'
    },


  ],
  current: {}
}

export default {

  state: _protocols,


  mutations: {
    setCurrentProtocol (state, payload) {
      let proto = state.protocols.find((protocol) => {
        return protocol.id === parseInt(payload)
      });
      state.current = proto
    },

    initProtocols (state, payload) {
      state.protocols = payload      
      //refresh current proto?
      state.current = {}
    }
  },

  actions: {
    fetchProtocols({ commit }, options) {
      return erdApi.get('protocols/', {
      })
      .then(function (response) {
        commit('initProtocols', response.data[1])
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  },

}
