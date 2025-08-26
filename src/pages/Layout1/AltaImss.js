import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import imssHeader from "../../assets/images/AltaImss/Fondo.png";

const AltaIMSS = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      periodoPago: "Quincenal" // puedes cambiar el valor por defecto si gustas
    }
  });

  const [errorMsg, setErrorMsg] = useState(null);

  const onSubmit = async (data) => {
    const messageLines = [
      `NOMBRE DE LA EMPRESA: ${data.empresa || "-"}`,
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
      `PERIODO DE PAGO: ${data.periodoPago || "-"}`, // ⬅️ NUEVO
      `DÍA DE DESCANSO: ${data.descanso || "-"}`,
      `INFONAVIT: ${data.infonavit || "-"}`,
      `INE: ${data.ineFile && data.ineFile.length ? data.ineFile[0].name : "No adjunto"}`,
      `CURP: ${data.curpFile && data.curpFile.length ? data.curpFile[0].name : "No adjunto"}`,
      `CONSTANCIA FISCAL: ${data.constanciaFiscalFile && data.constanciaFiscalFile.length ? data.constanciaFiscalFile[0].name : "No adjunto"}`,
    ];

    const formData = new FormData();
    formData.append("nombre", data.nombre || "-");
    formData.append("correo", data.email || "-");
    formData.append("mensaje", messageLines.join("\n"));
    formData.append("nombreProp", "César Bruno");
    formData.append("correoProp", "cesar.bruno@eladyasociados.com");
    formData.append("pagina", "ALTA EN EL IMSS TAE");
    formData.append("telefono", "");

    if (data.ineFile && data.ineFile.length) {
      formData.append("archivo[ineFile]", data.ineFile[0]);
    }
    if (data.curpFile && data.curpFile.length) {
      formData.append("archivo[curpFile]", data.curpFile[0]);
    }
    if (data.constanciaFiscalFile && data.constanciaFiscalFile.length) {
      formData.append("archivo[constanciaFiscalFile]", data.constanciaFiscalFile[0]);
    }

    try {
      await axios.post(
        "https://taeconta.com/api/public/api/correos/publicos",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("✅ Enviado correctamente");
      setErrorMsg(null);
      reset();
    } catch (error) {
      let backendMsg =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "Error desconocido";
      setErrorMsg(JSON.stringify(backendMsg, null, 2));
      console.log("Error completo:", error);
    }
  };

  return (
    <>
      {/* CABECERA CON IMAGEN DE FONDO */}
      <div
        style={{
          width: "100%",
          minHeight: 260,
          background: `linear-gradient(rgba(17,49,89,0.6), rgba(17,49,89,0.5)), url(${imssHeader}) center/cover`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          marginBottom: 24,
          borderRadius: "0 0 18px 18px",
          paddingTop: 110,
        }}
      >
        <h1 style={{
          fontWeight: 800,
          fontSize: 36,
          letterSpacing: 2,
          textShadow: "0 2px 8px #123"
        }}>
          Alta en el IMSS
        </h1>
        <p style={{
          fontSize: 20,
          marginTop: 8,
          opacity: 0.92,
          maxWidth: 540,
          textAlign: "center"
        }}>
          Da de alta fácilmente a tu trabajador ante el IMSS llenando el formulario.
        </p>
      </div>

      <div style={{ maxWidth: 850, margin: "0 auto", padding: 32 }}>
        <h4 className="text-center fw-bold mb-4" style={{ letterSpacing: 1 }}>
          Nos llegará un correo con tu información
        </h4>
        {errorMsg && (
          <div className="alert alert-danger" role="alert">
            <pre style={{ whiteSpace: "pre-wrap" }}>{errorMsg}</pre>
          </div>
        )}

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Nombre de empresa */}
          <Form.Group className="mb-3">
            <Form.Label>NOMBRE DE LA EMPRESA *</Form.Label>
            <Form.Control {...register("empresa", { required: true })} />
            {errors.empresa && <span className="text-danger">Campo obligatorio</span>}
          </Form.Group>

          {/* Correo electrónico */}
          <Form.Group className="mb-3">
            <Form.Label>CORREO ELECTRÓNICO</Form.Label>
            <Form.Control
              {...register("email", {
                required: "Campo obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Correo electrónico inválido"
                }
              })}
              type="email"
              placeholder="CORREO DE LA EMPRESA"
            />
            {errors.email && <span className="text-danger">{errors.email.message}</span>}
          </Form.Group>

          {/* Nombre completo */}
          <Form.Group className="mb-3">
            <Form.Label>NOMBRE COMPLETO *</Form.Label>
            <Form.Control {...register("nombre", { required: true })} placeholder="NOMBRE DEL EMPLEADO" />
            {errors.nombre && <span className="text-danger">Campo obligatorio</span>}
          </Form.Group>

          {/* No. de clínica */}
          <Form.Group className="mb-3">
            <Form.Label>N° DE CLÍNICA</Form.Label>
            <Form.Control {...register("clinica")} />
          </Form.Group>

          {/* CURP */}
          <Form.Group className="mb-3">
            <Form.Label>CURP *</Form.Label>
            <Form.Control
              {...register("curp", {
                required: "Campo obligatorio",
                pattern: {
                  value: /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z\d]\d$/,
                  message: "CURP inválida"
                },
                maxLength: { value: 18, message: "CURP debe tener 18 caracteres" },
                minLength: { value: 18, message: "CURP debe tener 18 caracteres" }
              })}
              placeholder="XXXXXXXXXXXXXXXXXX"
            />
            {errors.curp && <span className="text-danger">{errors.curp.message}</span>}
          </Form.Group>

          {/* RFC */}
          <Form.Group className="mb-3">
            <Form.Label>RFC</Form.Label>
            <Form.Control
              {...register("rfc", {
                pattern: {
                  value: /^([A-ZÑ&]{3,4})\d{6}[A-Z\d]{3}$/,
                  message: "RFC inválido"
                },
                maxLength: { value: 13, message: "Máximo 13 caracteres" },
                minLength: { value: 12, message: "Mínimo 12 caracteres" }
              })}
              placeholder="XXXXXXXXXXXXX"
            />
            {errors.rfc && <span className="text-danger">{errors.rfc.message}</span>}
          </Form.Group>

          {/* Puesto */}
          <Form.Group className="mb-3">
            <Form.Label>PUESTO *</Form.Label>
            <Form.Control {...register("puesto", { required: true })} placeholder="PUESTO DEL EMPLEADO" />
            {errors.puesto && <span className="text-danger">Campo obligatorio</span>}
          </Form.Group>

          {/* NSS */}
          <Form.Group className="mb-3">
            <Form.Label>NSS *</Form.Label>
            <Form.Control
              {...register("nss", {
                required: "Campo obligatorio",
                pattern: {
                  value: /^\d{11}$/,
                  message: "NSS inválido (debe tener exactamente 11 dígitos numéricos)"
                }
              })}
              placeholder="XXXXXXXXXXX"
            />
            {errors.nss && <span className="text-danger">{errors.nss.message}</span>}
          </Form.Group>

          {/* Código postal */}
          <Form.Group className="mb-3">
            <Form.Label>CÓDIGO POSTAL (trabajador) *</Form.Label>
            <Form.Control
              {...register("cp", {
                required: "Campo obligatorio",
                pattern: {
                  value: /^\d{5}$/,
                  message: "Código postal inválido"
                }
              })}
              placeholder="XXXXX"
            />
            {errors.cp && <span className="text-danger">{errors.cp.message}</span>}
          </Form.Group>

          {/* Fecha de alta */}
          <Form.Group className="mb-3">
            <Form.Label>FECHA DE ALTA *</Form.Label>
            <Form.Control {...register("fechaAlta", { required: true })} type="date" />
            {errors.fechaAlta && <span className="text-danger">Campo obligatorio</span>}
          </Form.Group>

          {/* Sueldo */}
          <Form.Group className="mb-3">
            <Form.Label>SUELDO</Form.Label>
            <Form.Control {...register("sueldo")} placeholder="$$$$$" />
          </Form.Group>

          {/* Salario diario */}
          <Form.Group className="mb-3">
            <Form.Label>SALARIO DIARIO</Form.Label>
            <Form.Control {...register("salarioDiario")} placeholder="$$$$$" />
          </Form.Group>

          {/* Lugar de nacimiento */}
          <Form.Group className="mb-3">
            <Form.Label>LUGAR DE NACIMIENTO</Form.Label>
            <Form.Control {...register("lugarNacimiento")} placeholder="Estado y ciudad en que nació" />
          </Form.Group>

          {/* ✅ Periodo de pago (select) */}
          <Form.Group className="mb-3">
            <Form.Label>PERIODO DE PAGO *</Form.Label>
            <Form.Select
              {...register("periodoPago", { required: "Campo obligatorio" })}
              aria-label="Selecciona el periodo de pago"
            >
              <option value="Semanal">Semanal</option>
              <option value="Quincenal">Quincenal</option>
              <option value="Mensual">Mensual</option>
              <option value="Anual">Anual</option>
            </Form.Select>
            {errors.periodoPago && <span className="text-danger">{errors.periodoPago.message}</span>}
          </Form.Group>

          {/* Día de descanso */}
          <Form.Group className="mb-3">
            <Form.Label>DÍA DE DESCANSO *</Form.Label>
            <Form.Control {...register("descanso", { required: true })} />
            {errors.descanso && <span className="text-danger">Campo obligatorio</span>}
          </Form.Group>

          {/* INFONAVIT */}
          <Form.Group className="mb-3">
            <Form.Label>¿CUENTA CON CRÉDITO O PRÉSTAMO INFONAVIT?</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="SI"
                {...register("infonavit")}
                value="SI"
              />
              <Form.Check
                type="radio"
                label="NO"
                {...register("infonavit")}
                value="NO"
              />
            </div>
          </Form.Group>

          {/* Archivos */}
          <Form.Group className="mb-3">
            <Form.Label>ADJUNTAR IMAGEN DE LA INE *</Form.Label>
            <Form.Control type="file" accept=".jpg,.jpeg,.png" {...register("ineFile", { required: true })} />
            <small>La imagen debe ser formato jpg, png o jpeg</small>
            {errors.ineFile && <span className="text-danger d-block">Campo obligatorio</span>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>ADJUNTAR IMAGEN DE CURP *</Form.Label>
            <Form.Control type="file" accept=".jpg,.jpeg,.png" {...register("curpFile", { required: true })} />
            <small>La imagen debe ser formato jpg, png o jpeg</small>
            {errors.curpFile && <span className="text-danger d-block">Campo obligatorio</span>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>ADJUNTAR CONSTANCIA DE SITUACIÓN FISCAL</Form.Label>
            <Form.Control type="file" accept=".pdf" {...register("constanciaFiscalFile")} />
            <small>Añade tu constancia de situación fiscal (PDF)</small>
          </Form.Group>

          <Button type="submit" variant="info" className="mt-2 px-4">
            ENVIAR
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AltaIMSS;
