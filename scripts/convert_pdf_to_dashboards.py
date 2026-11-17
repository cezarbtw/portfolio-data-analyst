import os
import sys
import fitz  # PyMuPDF

def convert_pdf_to_images(pdf_path, output_dir="public/dashboards", dpi=150):
    if not os.path.exists(pdf_path):
        print(f"Erro: Arquivo PDF não encontrado em '{pdf_path}'")
        return []

    os.makedirs(output_dir, exist_ok=True)
    doc = fitz.open(pdf_path)
    output_files = []

    print(f"Processando {pdf_path} ({len(doc)} páginas)...")
    for i, page in enumerate(doc):
        # Render page at high resolution
        pix = page.get_pixmap(dpi=dpi)
        filename = f"dashboard-page-{i+1}.png"
        output_file = os.path.join(output_dir, filename)
        pix.save(output_file)
        output_files.append(output_file)
        print(f"Salvo: {output_file} ({pix.width}x{pix.height})")

    print(f"Sucesso! {len(output_files)} imagens geradas em '{output_dir}'.")
    return output_files

if __name__ == "__main__":
    if len(sys.argv) > 1:
        pdf_path = sys.argv[1]
    else:
        # Default fallback: check Downloads for any novatech or dashboard pdf
        import glob
        matches = glob.glob(os.path.expanduser("~/Downloads/*powerbi*.pdf")) + \
                  glob.glob(os.path.expanduser("~/Downloads/*novatech*.pdf")) + \
                  glob.glob(os.path.expanduser("~/Downloads/*dashboard*.pdf"))
        if matches:
            pdf_path = matches[0]
        else:
            print("Uso: python scripts/convert_pdf_to_dashboards.py <caminho_do_arquivo.pdf>")
            sys.exit(1)

    convert_pdf_to_images(pdf_path)
