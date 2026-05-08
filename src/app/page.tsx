import type { CSSProperties } from "react";
import { SecaoSobre } from "@/componentes/SecaoSobre";
import { GavetaCarrinho } from "@/componentes/GavetaCarrinho";
import { ProvedorCarrinho } from "@/componentes/ProvedorCarrinho";
import { SecaoDiferenciais } from "@/componentes/SecaoDiferenciais";
import { SecaoFaq } from "@/componentes/SecaoFaq";
import { ChamadaFinal } from "@/componentes/ChamadaFinal";
import { Rodape } from "@/componentes/Rodape";
import { SecaoHero } from "@/componentes/SecaoHero";
import { SecaoComoPedir } from "@/componentes/SecaoComoPedir";
import { DestaqueDiaDasMaes } from "@/componentes/DestaqueDiaDasMaes";
import { SecaoProdutos } from "@/componentes/SecaoProdutos";
import { CabecalhoSite } from "@/componentes/CabecalhoSite";
import { ProvedorEstoque } from "@/componentes/ProvedorEstoque";
import { SecaoDepoimentos } from "@/componentes/SecaoDepoimentos";
import { brandInfo } from "@/dados/conteudo-site";

const themeStyle = {
  "--color-background": brandInfo.palette.background,
  "--color-surface": brandInfo.palette.surface,
  "--color-surface-strong": brandInfo.palette.surfaceStrong,
  "--color-text": brandInfo.palette.text,
  "--color-muted": brandInfo.palette.muted,
  "--color-primary": brandInfo.palette.primary,
  "--color-primary-foreground": brandInfo.palette.primaryForeground,
  "--color-accent": brandInfo.palette.accent,
  "--color-accent-soft": brandInfo.palette.accentSoft
} as CSSProperties;

export default function Home() {
  return (
    <ProvedorEstoque>
      <ProvedorCarrinho>
        <main className="mavis-page" style={themeStyle}>
          <CabecalhoSite />
          <SecaoHero />
          <DestaqueDiaDasMaes />
          <SecaoSobre />
          <SecaoProdutos />
          <SecaoDiferenciais />
          <SecaoComoPedir />
          <SecaoDepoimentos />
          <SecaoFaq />
          <ChamadaFinal />
          <Rodape />
          <GavetaCarrinho />
        </main>
      </ProvedorCarrinho>
    </ProvedorEstoque>
  );
}
