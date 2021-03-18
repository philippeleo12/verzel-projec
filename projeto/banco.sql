-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 17-Mar-2021 às 23:26
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `login`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `usuario_id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `usuario` varchar(200) NOT NULL,
  `datanasc` varchar(200) NOT NULL,
  `cpf` varchar(200) NOT NULL,
  `cep` varchar(200) NOT NULL,
  `endereco` varchar(200) NOT NULL,
  `ndr` varchar(200) NOT NULL,
  `senha` varchar(32) NOT NULL,
  `data_cadastro` datetime NOT NULL,
  PRIMARY KEY (`usuario_id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`usuario_id`, `nome`, `usuario`, `datanasc`, `cpf`, `cep`, `endereco`, `ndr`, `senha`, `data_cadastro`) VALUES
(1, 'EDDY', 'EDINHO@HOTMAIL.COM', '1994-11-05', '42101852802', '08551050', 'POA', '70', 'b81b9b7136fc559c960225fbd5aba21f', '2021-03-17 00:31:12'),
(2, 'eddy', 'eddy@hotmail.com', '1994-11-05', '421.018.528-02', '08511050', 'poa', '70', 'b81b9b7136fc559c960225fbd5aba21f', '2021-03-17 01:08:59'),
(4, 'Bruna', 'Bruna@hotmail.com', '1995-08-08', '428.865.218-92', '08551053', 'poa', '555', 'b81b9b7136fc559c960225fbd5aba21f', '2021-03-17 01:21:40'),
( '6299b4bf69960e53b6d9a0bd27342660', '2021-03-17 19:41:49');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
