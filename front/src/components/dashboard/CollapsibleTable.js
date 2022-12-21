import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { useRecoilState } from "recoil";
import { listaEtapa } from '../../states/etapa';

function createData(isLate, codigo, etapa, equipe, bg) {
  return {
    isLate,
    codigo,
    etapa,
    equipe,
    bg,
    more: [
      {
        nome: 'Blusa',
        quantidade: 3,
        duracao: 3,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [etapas, setEtapas] = useRecoilState(listaEtapa);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
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
            <div className={"rounded p-2 w-50 text-center fw-bold text-white text-uppercase text-nowrap overflow-hidden " + row.bg}>
                {row.isLate}
            </div>
        </TableCell>
        <TableCell align="left">{row.codigo}</TableCell>
        <TableCell align="left">{row.etapa}</TableCell>
        <TableCell align="right">{row.equipe}</TableCell>
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
                    <h6>teste valor</h6>
                   </div>
                   <div className="d-flex flex-column w-100">
                    <h6 className="fw-bold">Quantidade</h6>
                    <h6>teste valor</h6>
                   </div>
                   <div className="d-flex flex-column w-100">
                    <h6 className="fw-bold">Duração (Dias)</h6>
                    <h6>teste valor</h6>
                   </div>
                   <div className="d-flex flex-column w-100">
                    <h6 className="fw-bold">Atraso (Dias)</h6>
                    <h6>teste valor</h6>
                   </div>                        
                </div>
                <div className="d-flex justify-content-between mt-2">
                   <div className="d-flex flex-column w-100">
                    <h6 className="fw-bold">Data de Entrada</h6>
                    <h6>teste valor</h6>
                   </div>
                   <div className="d-flex flex-column w-100">
                    <h6 className="fw-bold opacity-0"> . </h6>
                    <h6 className="fw-bold opacity-0"> . </h6>
                   </div>
                   <div className="d-flex flex-column w-100">
                    <h6 className="fw-bold">Etapa</h6>
                    <Form.Select className="w-75">{etapas.map(v => {
                        return <option value={v.ordem}>{v.nome}</option>
                    })}</Form.Select>
                   </div>
                   <div className="d-flex flex-column w-100">
                    <h6 className="fw-bold opacity-0"> . </h6>
                    <div><Button>Salvar</Button></div>
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
      }),
    ).isRequired
  }).isRequired,
};

const rows = [
  createData('Atrasado', 'ATX158', 'Corte', 'bonde da stronda', 'bg-danger'),
  createData('Em dia', 'CZU958', 'Auditoria', 'tropa', 'bg-warning'),
  createData('Em dia', 'APT392', 'Costura', 'tropa', 'bg-success'),
];

export default function CollapsibleTable() {
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
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}