import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  MenuItem,
  Modal,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  Chip,
} from "@mui/material";

import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import NumbersRoundedIcon from "@mui/icons-material/NumbersRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import imssHeader from "../../assets/images/AltaImss/Fondo.png";

const AltaIMSS = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      periodoPago: "Quincenal",
      infonavit: "NO",
    },
  });

  const destinatarios = useMemo(
    () => [
      "cesar.bruno@eladyasociados.com",
      "christian.najera@eladyasociados.com",
      "ma.carmen@eladyasociados.com",
      "gilberto.rodriguez@eladyasociados.com",
      "adolfo.dominguez@eladyasociados.com",
      "contacto@eladyasociados.com",
      // "luis20320993@gmail.com",
    ],
    []
  );

  const [isSending, setIsSending] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingData, setPendingData] = useState(null);

  const [files, setFiles] = useState({
    ineFile: null,
    curpFile: null,
    constanciaFiscalFile: null,
  });

  const [modal, setModal] = useState({
    show: false,
    type: "success",
    title: "",
    message: "",
  });

  const closeModal = () => {
    setModal((prev) => ({ ...prev, show: false }));
  };

  const handleFileChange = (field, event) => {
    const file = event.target.files?.[0] || null;

    setFiles((prev) => ({
      ...prev,
      [field]: file,
    }));

    setValue(field, file ? event.target.files : null);
  };

  const onSubmit = (data) => {
    setPendingData(data);
    setConfirmOpen(true);
  };

  const sendRequest = async () => {
    if (!pendingData || isSending) return;

    setIsSending(true);

    const data = pendingData;

    const messageLines = [
      `NOMBRE DE LA EMPRESA: ${data.empresa || "-"}`,
      `CORREO: ${data.email || "-"}`,
      `NOMBRE COMPLETO: ${data.nombre || "-"}`,
      `N° DE CLÍNICA: ${data.clinica || "-"}`,
      `CURP: ${data.curp || "-"}`,
      `RFC: ${data.rfc || "-"}`,
      `PUESTO: ${data.puesto || "-"}`,
      `NSS: ${data.nss || "-"}`,
      `CÓDIGO POSTAL: ${data.cp || "-"}`,
      `FECHA DE ALTA: ${data.fechaAlta || "-"}`,
      `SUELDO: ${data.sueldo || "-"}`,
      `SALARIO DIARIO: ${data.salarioDiario || "-"}`,
      `LUGAR DE NACIMIENTO: ${data.lugarNacimiento || "-"}`,
      `PERIODO DE PAGO: ${data.periodoPago || "-"}`,
      `DÍA DE DESCANSO: ${data.descanso || "-"}`,
      `INFONAVIT: ${data.infonavit || "-"}`,
    ];

    const formData = new FormData();

    formData.append("nombre", data.nombre || "-");
    formData.append("correo", data.email || "-");
    formData.append("mensaje", messageLines.join("\n"));
    formData.append("nombreProp", "César Bruno");
    formData.append("pagina", "ALTA EN EL IMSS TAE");

    destinatarios.forEach((mail) => {
      formData.append("correoProp[]", mail);
    });

    if (data.ineFile?.length) {
      formData.append("archivo[ineFile]", data.ineFile[0]);
    }

    if (data.curpFile?.length) {
      formData.append("archivo[curpFile]", data.curpFile[0]);
    }

    if (data.constanciaFiscalFile?.length) {
      formData.append(
        "archivo[constanciaFiscalFile]",
        data.constanciaFiscalFile[0]
      );
    }

    try {
      await axios.post(
        "https://taeconta.com/api/public/api/correos/publicos",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setConfirmOpen(false);

      setModal({
        show: true,
        type: "success",
        title: "Solicitud enviada",
        message: "La información fue enviada correctamente.",
      });

      reset({
        periodoPago: "Quincenal",
        infonavit: "NO",
      });

      setFiles({
        ineFile: null,
        curpFile: null,
        constanciaFiscalFile: null,
      });

      setPendingData(null);
    } catch (error) {
      setConfirmOpen(false);

      setModal({
        show: true,
        type: "error",
        title: "Error al enviar",
        message:
          error?.response?.data?.message ||
          "No se pudo enviar la solicitud. Inténtalo nuevamente.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",
      backgroundColor: "#fff",
    },
  };

  const FileButton = ({ label, field }) => (
    <Box>
      <Button
        fullWidth
        component="label"
        variant={files[field] ? "contained" : "outlined"}
        startIcon={
          files[field] ? <CheckCircleRoundedIcon /> : <UploadFileRoundedIcon />
        }
        sx={{
          py: 1.8,
          borderRadius: "14px",
          justifyContent: "flex-start",
          textTransform: "none",
          fontWeight: 700,
          backgroundColor: files[field] ? "#16a34a" : "transparent",
          "&:hover": {
            backgroundColor: files[field] ? "#15803d" : undefined,
          },
        }}
      >
        {files[field] ? "Archivo cargado correctamente" : label}

        <input
          hidden
          type="file"
          accept=".pdf,.jpg,.jpeg,.png,.gif"
          onChange={(e) => handleFileChange(field, e)}
        />
      </Button>

      {files[field] && (
        <Chip
          icon={<CheckCircleRoundedIcon />}
          label={files[field].name}
          onDelete={() => {
            setFiles((prev) => ({ ...prev, [field]: null }));
            setValue(field, null);
          }}
          deleteIcon={<CloseRoundedIcon />}
          sx={{
            mt: 1.2,
            maxWidth: "100%",
            fontWeight: 600,
            backgroundColor: "#ecfdf5",
            color: "#166534",
            "& .MuiChip-label": {
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          }}
        />
      )}
    </Box>
  );

  const PreviewRow = ({ label, value }) => (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: { xs: "column", sm: "row" },
        py: 1,
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Typography
        fontWeight={800}
        sx={{
          minWidth: { sm: 190 },
          color: "#002b5c",
        }}
      >
        {label}:
      </Typography>

      <Typography sx={{ color: "#334155", wordBreak: "break-word" }}>
        {value || "-"}
      </Typography>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          pt: { xs: 14, md: 10 },
          pb: { xs: 5, md: 8 },
          background: `
      linear-gradient(rgba(0, 31, 63, 0.80), rgba(0, 31, 63, 0.88)),
      url(${imssHeader})
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: { xs: "scroll", md: "fixed" },
        }}
      >
        <Container maxWidth="md">
          <Box
            textAlign="center"
            color="#fff"
            mb={{ xs: 4, md: 5 }}
            px={{ xs: 2, md: 0 }}
            sx={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <Typography
              component="h1"
              fontWeight={900}
              sx={{
                color: "#ffffff !important",
                display: "block !important",
                visibility: "visible !important",
                fontSize: { xs: "2rem", sm: "2.6rem", md: "3.8rem" },
                lineHeight: 1.15,
                textTransform: "uppercase",
                letterSpacing: 1,
                mb: 2,
                textShadow: "0 4px 18px rgba(0,0,0,0.6)",
              }}
            >
              Alta en el IMSS
            </Typography>

            <Typography
              component="p"
              fontWeight={700}
              sx={{
                color: "#ffffff !important",
                display: "block !important",
                fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                lineHeight: 1.7,
                maxWidth: 850,
                mx: "auto",
                textShadow: "0 3px 12px rgba(0,0,0,0.45)",
              }}
            >
              Completa el formulario con los datos del trabajador y adjunta la
              documentación correspondiente.
            </Typography>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: "28px",
              background: "rgba(255,255,255,0.97)",
              boxShadow: "0 25px 80px rgba(0,0,0,0.28)",
            }}
          >
            <Stack spacing={1} mb={4}>
              <Typography variant="h4" fontWeight={800} color="#002b5c">
                Formulario de Registro
              </Typography>

              <Typography color="text.secondary">
                Ingresa cuidadosamente la información solicitada.
              </Typography>
            </Stack>

            <Divider sx={{ my: 3 }} />

            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2.5}>
                <TextField
                  fullWidth
                  label="Nombre de la empresa"
                  sx={inputStyle}
                  {...register("empresa", { required: true })}
                  error={!!errors.empresa}
                  helperText={errors.empresa && "Campo obligatorio"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BusinessRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  type="email"
                  label="Correo electrónico"
                  sx={inputStyle}
                  {...register("email", { required: true })}
                  error={!!errors.email}
                  helperText={errors.email && "Campo obligatorio"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Nombre completo"
                  sx={inputStyle}
                  {...register("nombre", { required: true })}
                  error={!!errors.nombre}
                  helperText={errors.nombre && "Campo obligatorio"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Número de clínica"
                  sx={inputStyle}
                  {...register("clinica")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeWorkRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="CURP"
                  sx={inputStyle}
                  {...register("curp", { required: true })}
                  error={!!errors.curp}
                  helperText={errors.curp && "Campo obligatorio"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BadgeRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="RFC"
                  sx={inputStyle}
                  {...register("rfc")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BadgeRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Puesto"
                  sx={inputStyle}
                  {...register("puesto", { required: true })}
                  error={!!errors.puesto}
                  helperText={errors.puesto && "Campo obligatorio"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <WorkRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="NSS"
                  sx={inputStyle}
                  {...register("nss", { required: true })}
                  error={!!errors.nss}
                  helperText={errors.nss && "Campo obligatorio"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <NumbersRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Código Postal"
                  sx={inputStyle}
                  {...register("cp", { required: true })}
                  error={!!errors.cp}
                  helperText={errors.cp && "Campo obligatorio"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationCityRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  type="date"
                  label="Fecha de Alta"
                  variant="outlined"
                  sx={{
                    ...inputStyle,
                    "& .MuiInputLabel-root": {
                      backgroundColor: "#fff",
                      px: 0.8,
                    },
                  }}
                  InputLabelProps={{ shrink: true }}
                  {...register("fechaAlta", { required: true })}
                  error={!!errors.fechaAlta}
                  helperText={errors.fechaAlta && "Campo obligatorio"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarMonthRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Sueldo"
                  sx={inputStyle}
                  {...register("sueldo")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PaymentsRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Salario Diario"
                  sx={inputStyle}
                  {...register("salarioDiario")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PaymentsRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  fullWidth
                  label="Lugar de nacimiento"
                  sx={inputStyle}
                  {...register("lugarNacimiento")}
                />

                <TextField
                  fullWidth
                  select
                  label="Periodo de Pago"
                  sx={inputStyle}
                  defaultValue="Quincenal"
                  {...register("periodoPago")}
                >
                  <MenuItem value="Semanal">Semanal</MenuItem>
                  <MenuItem value="Quincenal">Quincenal</MenuItem>
                  <MenuItem value="Mensual">Mensual</MenuItem>
                  <MenuItem value="Anual">Anual</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  label="Día de descanso"
                  sx={inputStyle}
                  {...register("descanso")}
                />

                <FormControl
                  sx={{
                    p: 2,
                    borderRadius: "14px",
                    border: "1px solid #d0d7de",
                    backgroundColor: "#fff",
                  }}
                >
                  <FormLabel>¿Cuenta con crédito INFONAVIT?</FormLabel>

                  <RadioGroup row defaultValue="NO">
                    <FormControlLabel
                      value="SI"
                      control={<Radio {...register("infonavit")} />}
                      label="Sí"
                    />

                    <FormControlLabel
                      value="NO"
                      control={<Radio {...register("infonavit")} />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>

                <Divider sx={{ my: 1 }} />

                <Typography variant="h6" fontWeight={800} color="#002b5c">
                  Documentos adjuntos
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#64748b",
                    mb: 1,
                    lineHeight: 1.7,
                  }}
                >
                  Puede adjuntar archivos en formato PDF, JPG, JPEG, PNG o GIF
                  para completar el proceso de registro.
                </Typography>

                <FileButton label="Subir INE" field="ineFile" />
                <FileButton label="Subir CURP" field="curpFile" />
                <FileButton
                  label="Subir Constancia Fiscal"
                  field="constanciaFiscalFile"
                />

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSending}
                  startIcon={
                    isSending ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <SendRoundedIcon />
                    )
                  }
                  sx={{
                    mt: 2,
                    py: 1.8,
                    borderRadius: "14px",
                    textTransform: "uppercase",
                    fontWeight: 800,
                    background: "#00a8e8",
                    boxShadow: "0 12px 30px rgba(0,168,232,0.35)",
                    "&:hover": {
                      background: "#0077b6",
                    },
                  }}
                >
                  Revisar información
                </Button>
              </Stack>
            </form>
          </Paper>
        </Container>
      </Box>

      {/* MODAL CONFIRMAR */}
      <Modal open={confirmOpen} onClose={() => !isSending && setConfirmOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 720,
            maxWidth: "94%",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          <Paper
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: "24px",
            }}
          >
            <Typography variant="h5" fontWeight={900} color="#002b5c">
              Confirmar información
            </Typography>

            <Typography color="text.secondary" mt={1} mb={3}>
              Revisa que los datos sean correctos antes de enviar la solicitud.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Stack spacing={0.5}>
              <PreviewRow label="Empresa" value={pendingData?.empresa} />
              <PreviewRow label="Correo" value={pendingData?.email} />
              <PreviewRow label="Nombre completo" value={pendingData?.nombre} />
              <PreviewRow label="N° de clínica" value={pendingData?.clinica} />
              <PreviewRow label="CURP" value={pendingData?.curp} />
              <PreviewRow label="RFC" value={pendingData?.rfc} />
              <PreviewRow label="Puesto" value={pendingData?.puesto} />
              <PreviewRow label="NSS" value={pendingData?.nss} />
              <PreviewRow label="Código Postal" value={pendingData?.cp} />
              <PreviewRow label="Fecha de Alta" value={pendingData?.fechaAlta} />
              <PreviewRow label="Sueldo" value={pendingData?.sueldo} />
              <PreviewRow
                label="Salario Diario"
                value={pendingData?.salarioDiario}
              />
              <PreviewRow
                label="Lugar de nacimiento"
                value={pendingData?.lugarNacimiento}
              />
              <PreviewRow
                label="Periodo de Pago"
                value={pendingData?.periodoPago}
              />
              <PreviewRow label="Día de descanso" value={pendingData?.descanso} />
              <PreviewRow label="INFONAVIT" value={pendingData?.infonavit} />
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Typography fontWeight={900} color="#002b5c" mb={1.5}>
              Archivos cargados
            </Typography>

            <Stack spacing={1}>
              <Chip
                icon={<CheckCircleRoundedIcon />}
                label={`INE: ${files.ineFile?.name || "No adjuntado"}`}
                color={files.ineFile ? "success" : "default"}
                sx={{ justifyContent: "flex-start" }}
              />

              <Chip
                icon={<CheckCircleRoundedIcon />}
                label={`CURP: ${files.curpFile?.name || "No adjuntado"}`}
                color={files.curpFile ? "success" : "default"}
                sx={{ justifyContent: "flex-start" }}
              />

              <Chip
                icon={<CheckCircleRoundedIcon />}
                label={`Constancia Fiscal: ${files.constanciaFiscalFile?.name || "No adjuntado"
                  }`}
                color={files.constanciaFiscalFile ? "success" : "default"}
                sx={{ justifyContent: "flex-start" }}
              />
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              mt={4}
            >
              <Button
                fullWidth
                variant="outlined"
                disabled={isSending}
                onClick={() => setConfirmOpen(false)}
                sx={{
                  py: 1.4,
                  borderRadius: "12px",
                  fontWeight: 800,
                  textTransform: "none",
                }}
              >
                Corregir información
              </Button>

              <Button
                fullWidth
                variant="contained"
                disabled={isSending}
                onClick={sendRequest}
                startIcon={
                  isSending ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <SendRoundedIcon />
                  )
                }
                sx={{
                  py: 1.4,
                  borderRadius: "12px",
                  fontWeight: 800,
                  textTransform: "none",
                  background: "#00a8e8",
                  "&:hover": {
                    background: "#0077b6",
                  },
                }}
              >
                {isSending ? "Enviando..." : "Confirmar y enviar"}
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Modal>

      {/* MODAL RESULTADO */}
      <Modal open={modal.show} onClose={closeModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 420,
            maxWidth: "92%",
          }}
        >
          <Paper
            sx={{
              p: 4,
              borderRadius: "24px",
            }}
          >
            <Typography variant="h5" fontWeight={800} mb={2}>
              {modal.title}
            </Typography>

            <Alert severity={modal.type === "success" ? "success" : "error"}>
              {modal.message}
            </Alert>

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                borderRadius: "12px",
              }}
              onClick={closeModal}
            >
              Cerrar
            </Button>
          </Paper>
        </Box>
      </Modal>
    </>
  );
};

export default AltaIMSS;