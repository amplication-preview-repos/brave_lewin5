import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { BehaviorList } from "./behavior/BehaviorList";
import { BehaviorCreate } from "./behavior/BehaviorCreate";
import { BehaviorEdit } from "./behavior/BehaviorEdit";
import { BehaviorShow } from "./behavior/BehaviorShow";
import { PatternList } from "./pattern/PatternList";
import { PatternCreate } from "./pattern/PatternCreate";
import { PatternEdit } from "./pattern/PatternEdit";
import { PatternShow } from "./pattern/PatternShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PatternRecognition"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
        <Resource
          name="Behavior"
          list={BehaviorList}
          edit={BehaviorEdit}
          create={BehaviorCreate}
          show={BehaviorShow}
        />
        <Resource
          name="Pattern"
          list={PatternList}
          edit={PatternEdit}
          create={PatternCreate}
          show={PatternShow}
        />
      </Admin>
    </div>
  );
};

export default App;
