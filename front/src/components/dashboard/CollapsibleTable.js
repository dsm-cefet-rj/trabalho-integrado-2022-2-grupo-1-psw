import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { listaEtapa } from "../../states/etapa";
import { dashboardProdutosAtom } from "../../states/produto";
import { UpdateEtapaProduto } from "../../service/etapa";

function lateDays (from) {
  const date1 = new Date();
  const date2 = from;
  const diffTime = date2 - date1;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [etapas, setEtapas] = useRecoilState(listaEtapa);
  const [dashboard, setDashboard] = useRecoilState(dashboardProdutosAtom);

  const [etapa, setEtapa] = React.useState(etapas.filter(v => v.codigo === row.etapa)[0]?.codigo || null);
  const [dataState, setDataState] = React.useState(row.data_entrada || null);

  const [etapaSelector, setEtapaSelector] = React.useState(etapa);
  
  function etapaDuration (etapa) {
    return etapas.filter(v => v.codigo === etapa)[0]?.duracao;
  }

  function getBg(){
    if(!dataState){
      return "bg-secondary"
    }
    if(lateDays(dataState) > etapaDuration(etapa)){
      return "bg-dark"
    }else if(lateDays(dataState) > etapaDuration(etapa) - 2){
      return "bg-danger"
    }else{
      return "bg-success"
    }
  }

  async function UpdateEtapa() {
    if(!etapaSelector){
      window.alert("Etapa inválida!");
      return;
    }
    try{
      const resp = await UpdateEtapaProduto({
        dono: row.dono, codigo:row.codigo, etapa:etapaSelector
      });
      window.alert("Atualizado com sucesso!");
      window.location.reload()
    }catch(e){
      setEtapaSelector(row.etapa);
      return;
    }
  }

  React.useEffect(() => {
    console.log(etapaSelector);
  }, [etapaSelector])

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <div
            className={
              "rounded p-2 w-50 text-center fw-bold text-white text-uppercase text-nowrap overflow-hidden " +
              getBg()
            }
          >
            {!!dataState ? 
              (lateDays(dataState) > etapaDuration(etapaSelector) ? "Atrasado" : "Em dia")
            : "-"}
          </div>
        </TableCell>
        <TableCell align="left">{row.codigo}</TableCell>
        <TableCell align="left">{etapa || '-'}</TableCell>
        <TableCell align="right">{row.equipe.length > 0 ? row.equipe : '-'}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Mais Informações
              </Typography>
              <div className="d-flex justify-content-between mt-3">
                <div className="d-flex flex-column w-100">
                  <h6 className="fw-bold">Nome do Produto</h6>
                  <h6>{row.nome}</h6>
                </div>
                <div className="d-flex flex-column w-100">
                  <h6 className="fw-bold">Quantidade</h6>
                  <h6>{row.quantidade}</h6>
                </div>
                <div className="d-flex flex-column w-100">
                  <h6 className="fw-bold">Duração (Dias)</h6>
                  <h6>{etapaDuration(etapaSelector) || '-'}</h6>
                </div>
                <div className="d-flex flex-column w-100">
                  <h6 className="fw-bold">Atraso (Dias)</h6>
                  <h6>{lateDays(dataState) - etapaDuration(etapaSelector) > 0 ? (lateDays(dataState) - etapaDuration(etapaSelector)) + ' dias' : 0 + ' dias'}</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className="d-flex flex-column w-100">
                  <h6 className="fw-bold">Data de Entrada</h6>
                  <h6>{!!dataState ? new Date(dataState).toDateString() : '-'}</h6>
                </div>
                <div className="d-flex flex-column w-100">
                  <h6 className="fw-bold opacity-0"> . </h6>
                  <h6 className="fw-bold opacity-0"> . </h6>
                </div>
                <div className="d-flex flex-column w-100">
                  <h6 className="fw-bold">Etapa</h6>
                  <Form.Select value={etapaSelector} onChange={e => setEtapaSelector(e.target.value)}className="w-75">
                    <option value={''}>Etapa...</option>
                    {etapas.map((v) => {
                      return <option value={v.codigo}>{v.nome}</option>;
                    })}
                  </Form.Select>
                </div>
                <div className="d-flex flex-column w-100">
                  <h6 className="fw-bold opacity-0"> . </h6>
                  <div>
                    <Button onClick={UpdateEtapa}>Salvar</Button>
                  </div>
                </div>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    status: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    etapa: PropTypes.string.isRequired,
    more: PropTypes.arrayOf(
      PropTypes.shape({
        codigo: PropTypes.string.isRequired,
        quantidade: PropTypes.number.isRequired,
        duracao: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default function CollapsibleTable() {

  const [dashboard, setDashboard] = useRecoilState(dashboardProdutosAtom);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Status</TableCell>
            <TableCell align="left">Código do Produto</TableCell>
            <TableCell align="left">Etapa</TableCell>
            <TableCell align="right">Equipe</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dashboard.map((row, index) => (
            <Row key={row.name} index={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
