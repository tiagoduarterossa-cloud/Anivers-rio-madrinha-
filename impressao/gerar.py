# Gera caixa.html e folheto.html a partir dos .src.html e do texto do folheto em ../index.html
import re, pathlib
here = pathlib.Path(__file__).parent
qr = (here/'qr.svg').read_text()
qr = qr.replace('width="370" height="370"', 'viewBox="0 0 37 37" width="100%" height="100%"').replace(' transform="scale(10)"', '')
index = (here.parent/'index.html').read_text()
doc = re.search(r'<div class="doc" id="doc" hidden>(.*?)\n      </div>\n    </article>', index, re.S).group(1)
(here/'caixa.html').write_text((here/'caixa.src.html').read_text().replace('{{QR}}', qr))
(here/'folheto.html').write_text((here/'folheto.src.html').read_text().replace('{{DOC}}', doc))
print('ok')
