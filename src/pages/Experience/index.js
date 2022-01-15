import React from "react";
import PageTemplate from "../../componentes/PageTemplate";
import JobCard from "../../componentes/ThirdPageContent/JobCard";
import Mm from "../../img/mm.png";
import King from "../../img/king.png";
import Jumper from "../../img/jumper.png";
import E2c from "../../img/e2c.jpeg";
import styled from "styled-components";

const StyledList = styled.ul`
    list-style-type: none;
    margin: .5em 0;
`
const StyledDetails = styled.details`
    margin-left: 1em;
`
const StyledDetails2 = styled.details`
    margin-left: 1.5em;
    margin-bottom: 1em;
`
const StyledLink = styled.a`
    margin-left: 2em;
    text-decoration: none;
    color: #222;
    font-weight: 700;
`

export default function Experience() {
    return(
        <PageTemplate>
                <JobCard src={ E2c } companyLink="https://e2cjunior.com/" company="E2C Júnior - Empresa Júnior de Engenharia de Computação da UEPG" jobTitle="Trainee" date="nov/2021 - atualmente"
                activities="Desenvolvimento web frontend." ></JobCard>
                <JobCard src={ Jumper } companyLink="https://jumpercursos.com.br/" company="Jumper! Profissões e Idiomas" jobTitle="Professora de Inglês" date="fev/2021 - jun/2021"
                activities={ <p>Ministrou aulas de Inglês nível 1 para crianças entre 9 e 12 anos.<br />Acompanhou as turmas de Informática Profissional, Excel Avançado e Web Design no período de licença do professor titular (1 mês e meio).</p> } ></JobCard>
                <JobCard src={ King } companyLink="https://cursos.kingcursos.com.br/" company="King Cursos" jobTitle="Professora de Inglês" date="jan/2020 - dez/2020"
                activities="Ministrou aulas de Inglês nível 1 para adolescentes entre 12 e 17 anos." ></JobCard>
                <JobCard src={ Mm } companyLink="https://www.lojasmm.com/" company="Lojas MM MercadoMóveis" jobTitle="Aprendiz" date="jun/2018 - dez/2018"
                activities={ <p>Controle e contagem de estoque;<br />Atendimento ao cliente;<br />Cadastro de produtos para assistência técnica.</p> } >
                    <details>
                        <summary>Cursos e Treinamentos realizados</summary>
                        <StyledDetails>
                            <summary>A arte de tomar decisões</summary>
                            <StyledLink href="https://drive.google.com/file/d/1BdKlqsNuakZds63dAX5FgiW75Ieg2UFe/view?usp=sharing">Certificado »</StyledLink>
                            <StyledDetails2>
                                <summary>Ver conteúdo</summary>
                                <p>CH: 1 hora</p>
                                <StyledList>
                                    <li>Conceito de tomada de decisão</li>
                                    <li>Perfis que levam a tomada de decisão ao fracasso</li>
                                    <li>Perfil que leva a tomada de decisão ao sucesso</li>
                                    <li>Tomando decisões corretas</li>
                                    <li>Etapas do processo de decisão</li>
                                    <li>Benefícios por tomar a decisão correta</li>
                                    <li>Tipos de decisões</li>
                                    <li>Hora da prática - Jogo do conhecimento</li>
                                </StyledList>
                            </StyledDetails2>
                        </StyledDetails>
                        <StyledDetails>
                            <summary>Checklist - Executando tarefas com êxito</summary>
                            <StyledLink href="https://drive.google.com/file/d/1oGlRizLjAk8g4OL41_jA8cHhhkuadLkL/view?usp=sharing">Certificado »</StyledLink>
                            <StyledDetails2>
                                <summary>Ver conteúdo</summary>
                                <p>CH: 2 horas</p>
                                <StyledList>
                                    <li>Por que a nossa memória falha?</li>
                                    <li>Causas mais comuns da Falha de Memória</li>
                                    <li>Checklist - o que é?</li>
                                    <li>Vantagens da técnnica checklist</li>
                                    <li>Testando a atenção</li>
                                    <li>Como surgiu a lista de verificação</li>
                                    <li>Aplicação do checklist</li>
                                    <li>Dicas para elaborar um checklist</li>
                                    <li>Alcançando sucesso em seus projetos</li>
                                    <li>Hora da prática - Jogo do conhecimento</li>
                                </StyledList>
                            </StyledDetails2>
                        </StyledDetails>
                        <StyledDetails>
                            <summary>Como combater o estresse e a ansiedade</summary>
                            <StyledLink href="https://drive.google.com/file/d/1p4SGvFZbRFmNm2CmWQRzOqg00PupLSGy/view?usp=sharing">Certificado »</StyledLink>
                            <StyledDetails2>
                                <summary>Ver conteúdo</summary>
                                <p>CH: 4 horas</p>
                                <StyledDetails2>
                                    <summary>Aula 1 - Entendendo o estresse</summary>
                                    <StyledList>
                                        <li>O que é o estresse?</li>
                                        <li>Estresse fisiológico</li>
                                        <li>Predisposição ao estresse</li>
                                        <li>Como o estresse afeta uma pessoa</li>
                                        <li>O processo de estresse</li>
                                        <li>Como lidar com o estresse</li>
                                        <li>Exaustão ou esgotamento</li>
                                        <li>Como funciona o estresse?</li>
                                        <li>Tireóide</li>
                                        <li>Efeitos psicológicos do estresse</li>
                                        <li>Cansaço X Estresse</li>
                                        <li>Quando combater o estresse</li>
                                        <li>Dicas de como lidar com o estresse</li>
                                        <li>Hora da prática</li>
                                    </StyledList>
                                </StyledDetails2>
                                <StyledDetails2>
                                <summary>Aula 02 - Entendendo a Ansiedade</summary>
                                    <StyledList>
                                        <li>Ansiedade</li>
                                        <li>Sintomas comuns da ansiedade</li>
                                        <li>A ansiedade é prejudicial na sua vida?</li>
                                        <li>O normal da ansiedade</li>
                                        <li>Síndrome do Pânico</li>
                                        <li>A reação do organismo</li>
                                        <li>Ansiedade X Autoconfiança</li>
                                        <li>A Autoconfiança e a Ansiedade têm solução</li>
                                        <li>Hora da Prática</li>
                                    </StyledList>
                                </StyledDetails2>
                                <StyledDetails2>
                                    <summary>Aula 3 - Combatendo o estresse e a ansiedade</summary>
                                    <StyledList>
                                        <li>Rotina X Estresse X Ansiedade</li>
                                        <li>Correria no dia a dia</li>
                                        <li>Alimentação X Estresse X Ansiedade</li>
                                        <li>O que evitar consumir</li>
                                        <li>Controlando a ansiedade</li>
                                        <li>O que fazer para não se preocupar?</li>
                                        <li>Dicas para combater o estresse e a ansiedade</li>
                                        <li>Otimismo todo dia</li>
                                    </StyledList>
                                </StyledDetails2>
                            </StyledDetails2>
                        </StyledDetails>
                        <StyledDetails>
                            <summary>Conheça os ladrões do tempo</summary>
                            <StyledLink href="https://drive.google.com/file/d/1xTbq-lYpAkzzDsWe4FsACF6JdeBHb4Hi/view?usp=sharing">Certificado »</StyledLink>
                            <StyledDetails2>
                                <summary>Ver conteúdo</summary>
                                <p>CH: 1 hora</p>
                                <StyledList>
                                    <li>Definição do tempo</li>
                                    <li>Introdução à Administração do Tempo</li>
                                    <li>Etapas da Administração do Tempo</li>
                                    <li>Os ladrões do tempo</li>
                                    <li>A importância de delegar</li>
                                    <li>Falsos ladrões do tempo</li>
                                    <li>Ferramentas auxiliares na gestão do tempo</li>
                                    <li>Hora da prática</li>
                                </StyledList>
                            </StyledDetails2>
                        </StyledDetails>
                        <StyledDetails>
                            <summary>Conhecendo a Reforma Ortográfica</summary>
                            <StyledLink href="https://drive.google.com/file/d/1FhZQ1NzA1P_dUFkT38spHtZaaeGfXBpC/view?usp=sharing">Certificado »</StyledLink>
                            <StyledDetails2>
                                <summary>Ver conteúdo</summary>
                                <p>CH: 8 horas</p>
                                <StyledList>
                                    <li>Mudanças no alfabeto e trema</li>
                                    <li>O que muda nas regras de acentuação</li>
                                    <li>O uso do hífen</li>
                                </StyledList>
                            </StyledDetails2>
                        </StyledDetails>
                        <StyledDetails>
                            <summary>Ética no ambiente profissional</summary>
                            <StyledLink href="https://drive.google.com/file/d/1TI5Zp1dQRL0m1w273C-RxULKY27fRwNU/view?usp=sharing">Certificado »</StyledLink>
                            <StyledDetails2>
                                <summary>Ver conteúdo</summary>
                                <p>CH: 2 horas</p>
                                <StyledList>
                                    <li>Conceito de ética e moral</li>
                                    <li>Códigos de ética profisisonal</li>
                                    <li>Vantagens de se ter um código de ética na empresa</li>
                                    <li>A ética sob o ponto de vista atual</li>
                                    <li>A ética e o crescimento profissional</li>
                                    <li>Exercícios essenciais para uma conduta ética de sucesso</li>
                                    <li>10 mandamentos da ética profissional</li>
                                    <li>Hora da prática</li>
                                </StyledList>
                            </StyledDetails2>
                        </StyledDetails>
                        <StyledDetails>
                            <summary>Excel 2013</summary>
                            <StyledLink href="https://drive.google.com/file/d/1UJiD-kNzMaFWq6LEU94KAF47cFRabPRM/view?usp=sharing">Certificado »</StyledLink>
                            <StyledDetails2>
                                <summary>Ver conteúdo</summary>
                                <p>CH: 4 horas</p>
                                <StyledDetails2>
                                    <summary>Aula 1 - Introdução</summary>
                                    <StyledList>
                                        <li>Acesso ao Excel</li>
                                        <li>Formatação</li>
                                        <li>Mesclar e Centralizar</li>
                                        <li>Ajuste de células</li>
                                        <li>Formatação de Fonte</li>
                                        <li>Cor de preenchimento</li>
                                        <li>Aplicação de bordas e número</li>
                                        <li>Ajuste de tamanho de linhas</li>
                                        <li>Renomeação de planilha</li>
                                        <li>Hora da prática</li>
                                    </StyledList>
                                </StyledDetails2>
                                <StyledDetails2>
                                    <summary>Aula 2 - Tabela Dinâmica e Análise Rápida</summary>
                                    <StyledList>
                                        <li>Tabela Dinâmica</li>
                                        <li>Análise Rápida de Dados</li>
                                        <li>Análise Rápida - Formatação</li>
                                        <li>Análise Rápida - Gráficos</li>
                                        <li>Análise Rápida - Totais</li>
                                        <li>Análise Rápida - Tabelas e Minigráficos</li>
                                        <li>Hora da Prática</li>
                                    </StyledList>
                                </StyledDetails2>
                                <StyledDetails2>
                                    <summary>Aula 3 - Funções</summary>
                                    <StyledList>
                                        <li>Função SE</li>
                                        <li>Formatação Condicional</li>
                                        <li>Função Máximo</li>
                                        <li>Função Mínimo</li>
                                        <li>Função Média</li>
                                        <li>Função Cont.se</li>
                                        <li>Função PROCV</li>
                                        <li>Hora da Prática</li>
                                    </StyledList>
                                </StyledDetails2>
                            </StyledDetails2>
                        </StyledDetails>
                        <StyledDetails>
                            <summary>Matemática - Fundamentos básicos I</summary>
                            <StyledLink href="https://drive.google.com/file/d/1UO9bdkk491uLM-1-3UxFJmzt9ccpDsmD/view?usp=sharing">Certificado »</StyledLink>
                            <StyledDetails2>
                                <summary>Ver conteúdo</summary>
                                <p>CH: 8 horas</p>
                                <StyledDetails2>
                                    <summary>Aula 1 - Operações Fundamentais 1</summary>
                                    <StyledList>
                                        <li>Soma e Subtração de Fração</li>
                                        <li>Multiplicação de Fração</li>
                                        <li>Divisão de Fração</li>
                                        <li>Potenciação de Fração</li>
                                        <li>Radiciação</li>
                                        <li>Expressões Numéricas</li>
                                    </StyledList>
                                </StyledDetails2>
                                <StyledDetails2>
                                    <summary>Aula 2 - Operações Fundamentais 2</summary>
                                    <StyledList>
                                        <li>Soma e subtração com sinais diferentes</li>
                                        <li>Multiplicação e Divisão com Sinais</li>
                                        <li>Potenciação com sinais diferentes e iguais</li>
                                        <li>Radiciação com sinais</li>
                                        <li>Expressões numéricas com sinais diferentes</li>
                                    </StyledList>
                                </StyledDetails2>
                                <StyledDetails2>
                                    <summary>Aula 3 - Produtos Notáveis e Fatoração</summary>
                                    <StyledList>
                                        <li>Produtos Notáveis</li>
                                        <li>Fatoração</li>
                                        <li>Agrupamento de Fatores Comuns</li>
                                        <li>Diferença de Dois Quadrados</li>
                                        <li>Trinômio Quadrado Perfeito</li>
                                    </StyledList>
                                </StyledDetails2>
                                <StyledDetails2>
                                    <summary>Aula 4 - Equações do 1º grau</summary>
                                    <StyledList>
                                        <li>Equações do 1º grau</li>
                                        <li>Equações do 1º grau na forma fracionária</li>
                                    </StyledList>
                                </StyledDetails2>
                                <StyledDetails2>
                                    <summary>Aula 5 - Equações do 2º grau</summary>
                                    <StyledList>
                                        <li>Equações do 2º grau</li>
                                        <li>Equações Incompletas</li>
                                        <li>Equações completas</li>
                                        <li>Produto da soma pela diferença</li>
                                    </StyledList>
                                </StyledDetails2>
                            </StyledDetails2>
                        </StyledDetails>
                        <StyledDetails>
                            <summary>Matemática - Fundamentos básicos II</summary>
                            <StyledLink href="https://drive.google.com/file/d/1JS9SB1Ia9CG7b-5iMRF3GzhL_El-lmuQ/view?usp=sharing">Certificado »</StyledLink>
                            <StyledDetails2>
                                <summary>Ver conteúdo</summary>
                                <p>CH: 2 horas</p>
                                <StyledDetails2>
                                    <summary>Aula 1 - Noções de Matemática Financeira</summary>
                                    <StyledList>
                                        <li>Porcentagem</li>
                                        <li>Calculando Porcentagem com a regra de 3 simples</li>
                                        <li>Lucro e Prejuízo</li>
                                        <li>Juros Simples</li>
                                        <li>Juros Compostos</li>
                                        <li>Exercícios</li>
                                    </StyledList>
                                </StyledDetails2>
                                <StyledDetails2>
                                    <summary>Aula 2 - Cálculo Combinatório</summary>
                                    <StyledList>
                                        <li>Cálculo Combinatório</li>
                                        <li>Princípio Multiplicativo</li>
                                        <li>Exercícios</li>
                                    </StyledList>
                                </StyledDetails2>
                                <StyledDetails2>
                                    <summary>Aula 3 - Probabilidade</summary>
                                    <StyledList>
                                        <li>Espaço Amostral e Evento</li>
                                        <li>Probabilidade de um Evento</li>
                                        <li>Exercícios</li>
                                    </StyledList>
                                </StyledDetails2>
                                <StyledDetails2>
                                    <summary>Aula 4 - Geometria Espacial</summary>
                                    <StyledList>
                                        <li>Área e volume de cubos e paralelepípedos</li>
                                        <li>Exemplos</li>
                                        <li>Paralelepípedo</li>
                                        <li>Cilindros</li>
                                    </StyledList>
                                </StyledDetails2>
                            </StyledDetails2>
                        </StyledDetails>
                    </details>
                </JobCard>
        </PageTemplate>
    )
}