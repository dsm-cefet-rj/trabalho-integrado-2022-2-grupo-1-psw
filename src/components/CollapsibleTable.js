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

function createData(apelido, codigo, quantidade, processo, etapa) {
  return {
    apelido,
    codigo,
    quantidade,
    processo,
    maisInformacoes: [
      {
        quantidade: {quantidade},
        etapa: {etapa},
      },
      {
        quantidade: {quantidade},
        etapa: {etapa},
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row"></TableCell>
        <TableCell align="left">{row.apelido}</TableCell>
        <TableCell align="left">{row.codigo}</TableCell>
        <TableCell align="left">{row.quantidade}</TableCell>
        <TableCell align="left">{row.processo}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Mais Informações
              </Typography>
              <Table size="small" aria-label="Mais Informações">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Etapa</TableCell>
                    <TableCell align="right">Quantidade</TableCell>
                    <TableCell align="right">Etapa</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.maisInformacoes.map((maisInformacoesRow) => (
                    <TableRow key={maisInformacoesRow.quantidade}>
                      <TableCell component="th" scope="row">
                        {maisInformacoesRow.quantidade}
                      </TableCell>
                      <TableCell align="right">{maisInformacoesRow.etapa}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    apelido: PropTypes.string.isRequired,
    codigo: PropTypes.number.isRequired,
    quantidade: PropTypes.number.isRequired,
    processo: PropTypes.number.isRequired,
    maisInformacoes: PropTypes.arrayOf(
      PropTypes.shape({
        quantidade: PropTypes.number.isRequired,
        etapa: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData('Blusa Azul', 23500, 3, 'Blusa', 'corte'),
  createData('Calça', 33, 3, 'Calça', 'corte'),
  createData('Blusa Rosa', 6744, 3, 'Blusa', 'costura'),
  createData('Bermuda', 9684, 3, 'Bermuda', 'compra do tecido'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">Apelido</TableCell>
            <TableCell align="left">Código</TableCell>
            <TableCell align="left">Quantidade</TableCell>
            <TableCell align="left">Processo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.apelido} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}