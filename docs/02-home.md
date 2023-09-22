- ![Computer](../images/prints/computer.png)
  - ![Print](../images/prints/02-home.png)

# HOME

| Ícone               | Legenda                                            |
| ------------------- | -------------------------------------------------- |
| :large_blue_circle: | Campo funcional                                    |
| :no_entry:          | Não possui o campo ou apenas para controle interno |
| :black_circle:      | Campo obrigatório no admin                         |


&nbsp;

## FULLBANNER PRINCIPAL

**_Informações:_**

| Dúvida                | Instrução                                                        |
| --------------------- | ---------------------------------------------------------------- |
| **Onde cadastrar**    | Banners                                                          |
| **Onde será exibido** | Banner principal abaixo do header, ocupa 100% da largura da tela |
| **Cadastro exemplo**  | [Admin](https://testeteste.vnda.dev/admin/midias/editar?id=1)     |

&nbsp;

**_Orientações sobre os campos:_**

| Campo               | Funcional?          | Orientação                                                    |
| ------------------- | ------------------- | ------------------------------------------------------------- |
| **Imagem**          | :large_blue_circle: | Dimensão sugerida 2280x1200 pixels                            |
| **Título**          | :black_circle:      | Alt da imagem                                                 |
| **Subtítulo**       | :large_blue_circle: | Título do botão e posição do texto do banner. Opções a baixo! |
| **Descrição**       | :large_blue_circle: | Título e descrição do banner                                  |
| **Externo?**        | :large_blue_circle: | Selecionar se o link do banner deve abrir em outra aba        |
| **URL**             | :large_blue_circle: | Link de direcionamento                                        |
| **Posição Desktop** | :black_circle:      | `home-banner-principal`                                       |
| **Posição Mobile**  | :black_circle:      | `home-banner-principal-mobile`                                |
| **Cor**             | :no_entry:          |                                                               |

&nbsp;

**_Exemplo de subtítulo:_**

```md
CALL TO ACTION | left-center
```

**_Exemplo de descrição:_**

```md
\#\#\# UPPER TITLE
\#\# Título do Banner

Descrição do banner alinhado à esquerda.
```

**OBSERVAÇÃO**: Obrigatório remover as barras antes dos jogos da velha (hashtag).

&nbsp;

**_Posições do botão possíveis para colocar no campo subtítulo:_**

- left-top
- left-center
- left-bottom

- center-top
- center-center
- center-bottom

- right-top
- right-center
- right-bottom


&nbsp;

## TÍTULO INSTAGRAM

**_Informações:_**

| Dúvida                          | Instrução                                           |
| ------------------------------- | --------------------------------------------------- |
| **Onde cadastrar**              | Banners                                             |
| **Onde será exibido**           | Título da seção do instagem                         |
| **Cadastro exemplo em staging** | [Admin](https://testeteste.vnda.dev/admin/midias/73) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                             |
| ------------- | ------------------- | ------------------------------------------------------ |
| **Imagem**    | :no_entry:          |                                                        |
| **Título**    | :black_circle:      | Não exibido no front                                   |
| **Subtítulo** | :large_blue_circle: | @ do instagram                                         |
| **Descrição** | :large_blue_circle: | Breve descrição                                        |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do banner deve abrir em outra aba |
| **URL**       | :black_circle:      | Link de direcionamento para o instagram                |
| **Posição**   | :black_circle:      | `home-instagram-título`                                |
| **Cor**       | :no_entry:          |                                                        |

&nbsp;

**_Observações:_**

As imagens utilizadas no ambiente de desenvolvimento e pré produção, são apenas para demarcar a seção.
Para está seção aparecer em produção é necessário realizar a integração com o instagram. Caso deseje está opção, entrar em contato com o atendimento.

***


&nbsp;

## CARROSSEL DE PRODUTOS SUPERIOR

**_Informações:_**

| Dúvida                | Instrução                                                                       |
| --------------------- | ------------------------------------------------------------------------------- |
| **Onde cadastrar**    | Tags                                                                            |
| **Onde será exibido** | Carrossel de produtos superior a baixo dos ícones                               |
| **Cadastro exemplo**  | [Admin](https://testeteste.vnda.dev/admin/tags/editar?id=home-produtos-superior) |

&nbsp;

**_Informações sobre os campos_**

| Campo         | Funcional?          | Orientação                                   |
| ------------- | ------------------- | -------------------------------------------- |
| **Nome**      | :black_circle:      | `home-produtos-superior`                     |
| **Título**    | :large_blue_circle: | Título do carrossel                          |
| **Subtítulo** | :large_blue_circle: | Título do botão que vai para a página da tag |
| **Descrição** | :no_entry:          |                                              |
| **Tipo**      | :no_entry:          |                                              |
| **Imagem**    | :no_entry:          |                                              |


&nbsp;

## ÍCONES (até 4)

**_Informações:_**

| Dúvida                | Instrução                                                     |
| --------------------- | ------------------------------------------------------------- |
| **Onde cadastrar**    | Banners                                                       |
| **Onde será exibido** | Seção com 4 ícones a baixo do fullbanner                      |
| **Cadastro exemplo**  | [Admin](https://testeteste.vnda.dev/admin/midias/editar?id=49) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                             |
| ------------- | ------------------- | ------------------------------------------------------ |
| **Imagem**    | :black_circle:      | Dimensão sugerida 100x100 pixels                       |
| **Título**    | :black_circle:      | Alt da imagem                                          |
| **Subtítulo** | :large_blue_circle: | Texto curto que fica ao lado do ícone                  |
| **Descrição** | :no_entry:          |                                                        |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do banner deve abrir em outra aba |
| **URL**       | :large_blue_circle: | Link de direcionamento                                 |
| **Posição**   | :black_circle:      | `home-banner-icones`                                   |
| **Cor**       | :no_entry:          |                                                        |


&nbsp;

## BANNERS DE CATEGORIAS

**_Informações:_**

| Dúvida                | Instrução                                                          |
| --------------------- | ------------------------------------------------------------------ |
| **Onde cadastrar**    | Banners                                                            |
| **Onde será exibido** | Seção com dois banners lado a lado entre os carrosseis de produtos |
| **Cadastro exemplo**  | [Admin](https://testeteste.vnda.dev/admin/midias/editar?id=67)      |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                              |
| ------------- | ------------------- | ------------------------------------------------------- |
| **Imagem**    | :large_blue_circle: | Dimensão sugerida 1000x660 pixels                       |
| **Título**    | :black_circle:      | Alt da imagem                                           |
| **Subtítulo** | :large_blue_circle: | Título do botão                                         |
| **Descrição** | :large_blue_circle: | Upper title, título e descrição curta. Exemplo a baixo! |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do banner deve abrir em outra aba  |
| **URL**       | :large_blue_circle: | Link de direcionamento                                  |
| **Posição**   | :black_circle:      | `home-banner-categorias`                                |
| **Cor**       | :no_entry:          |                                                         |


&nbsp;

## CARROSSEL DE PRODUTOS SUPERIOR

**_Informações:_**

| Dúvida                | Instrução                                                                       |
| --------------------- | ------------------------------------------------------------------------------- |
| **Onde cadastrar**    | Tags                                                                            |
| **Onde será exibido** | Carrossel de produtos superior a baixo dos ícones                               |
| **Cadastro exemplo**  | [Admin](https://testeteste.vnda.dev/admin/tags/editar?id=home-produtos-superior) |

&nbsp;

**_Informações sobre os campos_**

| Campo         | Funcional?          | Orientação                                   |
| ------------- | ------------------- | -------------------------------------------- |
| **Nome**      | :black_circle:      | `home-produtos-superior`                     |
| **Título**    | :large_blue_circle: | Título do carrossel                          |
| **Subtítulo** | :large_blue_circle: | Título do botão que vai para a página da tag |
| **Descrição** | :no_entry:          |                                              |
| **Tipo**      | :no_entry:          |                                              |
| **Imagem**    | :no_entry:          |                                              |


&nbsp;

## FULLBANNER PRINCIPAL

**_Informações:_**

| Dúvida                | Instrução                                                        |
| --------------------- | ---------------------------------------------------------------- |
| **Onde cadastrar**    | Banners                                                          |
| **Onde será exibido** | Banner principal abaixo do header, ocupa 100% da largura da tela |
| **Cadastro exemplo**  | [Admin](https://testeteste.vnda.dev/admin/midias/editar?id=1)     |

&nbsp;

**_Orientações sobre os campos:_**

| Campo               | Funcional?          | Orientação                                                    |
| ------------------- | ------------------- | ------------------------------------------------------------- |
| **Imagem**          | :large_blue_circle: | Dimensão sugerida 2280x1200 pixels                            |
| **Título**          | :black_circle:      | Alt da imagem                                                 |
| **Subtítulo**       | :large_blue_circle: | Título do botão e posição do texto do banner. Opções a baixo! |
| **Descrição**       | :large_blue_circle: | Título e descrição do banner                                  |
| **Externo?**        | :large_blue_circle: | Selecionar se o link do banner deve abrir em outra aba        |
| **URL**             | :large_blue_circle: | Link de direcionamento                                        |
| **Posição Desktop** | :black_circle:      | `home-banner-principal`                                       |
| **Posição Mobile**  | :black_circle:      | `home-banner-principal-mobile`                                |
| **Cor**             | :no_entry:          |                                                               |

&nbsp;

**_Exemplo de subtítulo:_**

```md
CALL TO ACTION | left-center
```

**_Exemplo de descrição:_**

```md
\#\#\# UPPER TITLE
\#\# Título do Banner

Descrição do banner alinhado à esquerda.
```

**OBSERVAÇÃO**: Obrigatório remover as barras antes dos jogos da velha (hashtag).

&nbsp;

**_Posições do botão possíveis para colocar no campo subtítulo:_**

- left-top
- left-center
- left-bottom

- center-top
- center-center
- center-bottom

- right-top
- right-center
- right-bottom


&nbsp;

## CARROSSEL DE PRODUTOS SUPERIOR

**_Informações:_**

| Dúvida                | Instrução                                                                       |
| --------------------- | ------------------------------------------------------------------------------- |
| **Onde cadastrar**    | Tags                                                                            |
| **Onde será exibido** | Carrossel de produtos superior a baixo dos ícones                               |
| **Cadastro exemplo**  | [Admin](https://testeteste.vnda.dev/admin/tags/editar?id=home-produtos-superior) |

&nbsp;

**_Informações sobre os campos_**

| Campo         | Funcional?          | Orientação                                   |
| ------------- | ------------------- | -------------------------------------------- |
| **Nome**      | :black_circle:      | `home-produtos-superior`                     |
| **Título**    | :large_blue_circle: | Título do carrossel                          |
| **Subtítulo** | :large_blue_circle: | Título do botão que vai para a página da tag |
| **Descrição** | :no_entry:          |                                              |
| **Tipo**      | :no_entry:          |                                              |
| **Imagem**    | :no_entry:          |                                              |


&nbsp;

## BANNERS LADO A LADO

***Informações:***

| Dúvida                          | Instrução                                                         |
| ------------------------------- | ----------------------------------------------------------------- |
| **Onde cadastrar**              | Banners                                                           |
| **Onde será exibido**           | Home - Banners que intercalam o lado.                             |
| **Cadastro exemplo em staging** | [Admin](https://testeteste.vnda.dev/admin/banner/editar?id=46)     |

***Orientações sobre os campos:***

| Campo         | Funcional?          | Orientação                                             |
| ------------- | ------------------- | ------------------------------------------------------ |
| **Imagem**    | :large_blue_circle: | Dimensão sugerida 1000x560 pixels                      |
| **Título**    | :black_circle:      | Alt da imagem                                          |
| **Subtítulo** | :no_entry:          |                                                        |
| **Descrição** | :large_blue_circle: | Texto que fica sobre a imagem em Mardown               |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do banner deve abrir em outra aba |
| **URL**       | :large_blue_circle: | Link de direcionamento                                 |
| **Posição**   | :black_circle:      | `home-banner-grid`                                     |
| **Cor**       | :no_entry:          |                                                        |


&nbsp;

## TEXTO SEO

**_Informações:_**

| Dúvida                | Instrução                                                     |
| --------------------- | ------------------------------------------------------------- |
| **Onde cadastrar**    | Banners                                                       |
| **Onde será exibido** | Seção de texto acima do rodapé                                |
| **Cadastro exemplo**  | [Admin](https://testeteste.vnda.dev/admin/midias/editar?id=61) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                             |
| ------------- | ------------------- | ------------------------------------------------------ |
| **Imagem**    | :no_entry:          |                                                        |
| **Título**    | :black_circle:      | Não exibido no front                                   |
| **Subtítulo** | :large_blue_circle: | Texto do botão                                         |
| **Descrição** | :black_circle:      | Texto em markdown                                      |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do banner deve abrir em outra aba |
| **URL**       | :large_blue_circle: | Link de direcionamento                                 |
| **Posição**   | :black_circle:      | `home-texto-seo`                                       |
| **Imagem**    | :no_entry:          |                                                        |

&nbsp;

**_Exemplo de descrição:_**

```md
\#\#\# UPPER TITLE
\#\# Título do Banner

Descrição do banner alinhado à esquerda.
```

**OBSERVAÇÃO**: Obrigatório remover as barras antes dos jogos da velha (hashtag).


&nbsp;

## TEXTO INSTAGRAM

***Informações:***

| Dúvida                          | Instrução                                                     |
| :------------------------------ | :------------------------------------------------------------ |
| **Onde cadastrar**              | Banners                                                       |
| **Onde será exibido**           | Texto da seção do Instagram                                   |
| **Cadastro exemplo em staging** | [Admin](https://testeteste.vnda.dev/admin/midias/editar?id=43) |

***Orientações sobre os campos:***

| Campo         | Funcional?     | Orientação             |
| ------------- | -------------- | ---------------------- |
| **Imagem**    | :no_entry:     |                        |
| **Título**    | :black_circle: | Controle interno       |
| **Subtítulo** | :no_entry:     |                        |
| **Descrição** | :no_entry:     | Texto em Markdown      |
| **Externo?**  | :no_entry:     |                        |
| **URL**       | :no_entry:     |                        |
| **Posição**   | :black_circle: | `home-texto-instagram` |
| **Cor**       | :no_entry:     |                        |


***
