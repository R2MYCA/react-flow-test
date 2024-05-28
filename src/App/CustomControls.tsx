import { useStoreApi, useReactFlow, Panel } from "reactflow";

function CustomControls() {
  const store = useStoreApi();
  const { zoomIn, zoomOut, setCenter } = useReactFlow();

  const focusNode = () => {
    const { nodeInternals } = store.getState();
    const nodes = Array.from(nodeInternals).map(([, node]) => node);

    if (nodes.length > 0) {
      const node = nodes[0];

      const x = node.position.x + node.width / 2;
      const y = node.position.y + node.height / 2;
      const zoom = 1.85;

      setCenter(x, y, { zoom, duration: 1000 });
    }
  };
  const zoom = () => {
    zoomIn();
  }
  const dezoom = () => {
    zoomOut();
  }

  return (
    <Panel position="top-left">
      <div className="description">
        This is an example of how you can use the zoom pan helper hook
      </div>
      <div>
        <button onClick={focusNode} >
          focus node
        </button>
        <button onClick={zoom} >
          zoom in
        </button>
        <button onClick={dezoom}>
          zoom out
        </button>
      </div>
    </Panel>
  );
}

export default CustomControls;


// https://codesandbox.io/p/sandbox/great-ardinghelli-k7vof?file=%2Fsrc%2FCustomControls.js%3A1%2C10-1%2C26

// site react flow bouton custom pour gérer la board 
// https://reactflow.dev/examples/misc/use-react-flow-hook

//Modifier les nodes 
//https://reactflow.dev/examples/nodes/update-node



// SCA_A_ATTENTE_SUIVI	null	bool?
// SCA_A_UNE_DUREE	true	bool?
// SCA_COD_ACN	null	int?
// SCA_COD_ACP	1	int?
// SCA_COD_ATY	4	int?
// SCA_COD_RAT	11	int?
// SCA_COD_UTE	1	int?
// SCA_COS_ID	1	int?
// SCA_DESCRIPTION	"Description action attente"	string
// SCA_DESCRIPTION_UTILISATEUR	""	string
// SCA_DONNE_INFO_SUIVI	false	bool?
// +		SCA_DT_CREATION	{27/05/2024 17:00:22}	System.DateTime?
// SCA_DT_MODIFICATION	null	System.DateTime?
// SCA_EST_DEPART	true	bool?
// SCA_EST_FIN	false	bool?
// SCA_ID	36082	int
// SCA_INFO_SUIVI	"<p>\n\tInfo suivi en<strong> texte</strong></p>\n"	string
// SCA_MERE	null	int?
// SCA_MESSAGE_ATTENTE	""	string
// SCA_NBRE_UNITE_DUREE	2	int?
// SCA_NOM	"Test Action Attente"	string
// SCA_NUMERO	1	int?
// SCA_PRIORITE	1	int?
// SCA_QUESTION	""	string
// SCA_RESULTAT_CONDITION	"C'est le resultat"	string
// SCA_SCA_ID_A_LANCER	null	int?
// SCA_SCE_ID	10637	int?
// SCA_SCE_ID_A_LANCER	null	int?
// SCA_UTI_CREATION	"ryhez6"	string
// SCA_UTI_MODIFICATION	null	string
// codAtyLibelle	"ACTION ATTENTE"	string
// codUteLibelle	null	string
// nomActionPrecedente	null	string
// nomActionSuivante	null	string





