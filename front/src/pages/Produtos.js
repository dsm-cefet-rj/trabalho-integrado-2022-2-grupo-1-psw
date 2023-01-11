import { useRecoilState } from "recoil";
import { StyledEngineProvider } from "@mui/material/styles";
import Table from "../components/produtos/Table.js";
import { Button } from "react-bootstrap";
import NovoProduto from "../components/produtos/NovoProduto.js";
import { modalNProduto, listaProduto } from "../states/produto";
import popup from "../components/popup";
import NavbarComponent from "../components/Navbar";
import { useEffect, useState } from "react";
import { ProdutoLoadAll } from "../service/produto.js";

function Produtos() {
  const [mounted, setMounted] = useState(false);
  const [modal, setModal] = useRecoilState(modalNProduto);
  const [produtos, setProdutos] = useRecoilState(listaProduto);

  async function loadResources() {
    const user = JSON.parse(localStorage.getItem("user_token"));
    const produtoResource = await ProdutoLoadAll(user);
    setProdutos(produtoResource.data);
    setMounted(true);
  }

  useEffect(() => {
    if (!mounted) {
      loadResources();
    }
  }, []);

  function NovoProdutoModal() {
    setModal(true);
  }

  return (
    <div>
      <NavbarComponent />
      <div className="container mt-3">
        <NovoProduto show={modal} />
        <div className="d-flex flex-row justify-content-between w-100 mb-3">
          <h1>Produto</h1>
          <Button className="m-2" onClick={NovoProdutoModal}>
            Novo Produto
          </Button>
        </div>
        <StyledEngineProvider injectFirst>
          <Table rows={produtos} />
        </StyledEngineProvider>
      </div>
    </div>
  );
}

export default Produtos;
