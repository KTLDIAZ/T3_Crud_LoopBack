USE [Colegio]
GO
/****** Object:  Table [dbo].[DatosEstudiantes]    Script Date: 16/11/2020 17:22:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DatosEstudiantes](
	[IdEstudiante] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NULL,
	[Carrera] [varchar](50) NULL,
 CONSTRAINT [PK_DatosEstudiantes] PRIMARY KEY CLUSTERED
(
	[IdEstudiante] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Materias]    Script Date: 16/11/2020 17:22:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Materias](
	[IdMaterias] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NULL,
 CONSTRAINT [PK_Materias] PRIMARY KEY CLUSTERED
(
	[IdMaterias] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[NotasEstudiantes]    Script Date: 16/11/2020 17:22:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NotasEstudiantes](
	[IdNotasEstudiantes] [int] IDENTITY(1,1) NOT NULL,
	[IdEstudiante] [int] NULL,
	[IdMateria] [int] NULL,
	[Nota] [float] NULL,
 CONSTRAINT [PK_NotasEstudiantes] PRIMARY KEY CLUSTERED
(
	[IdNotasEstudiantes] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[NotasEstudiantes]  WITH CHECK ADD  CONSTRAINT [FK_NotasEstudiantes_DatosEstudiantes] FOREIGN KEY([IdEstudiante])
REFERENCES [dbo].[DatosEstudiantes] ([IdEstudiante])
GO
ALTER TABLE [dbo].[NotasEstudiantes] CHECK CONSTRAINT [FK_NotasEstudiantes_DatosEstudiantes]
GO
ALTER TABLE [dbo].[NotasEstudiantes]  WITH CHECK ADD  CONSTRAINT [FK_NotasEstudiantes_Materias] FOREIGN KEY([IdMateria])
REFERENCES [dbo].[Materias] ([IdMaterias])
GO
ALTER TABLE [dbo].[NotasEstudiantes] CHECK CONSTRAINT [FK_NotasEstudiantes_Materias]
GO
