const fs = require('fs');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();

function flattenXlfContent(content) {
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) {
    return content.map(flattenXlfContent).join('');
  }
  if (typeof content === 'object') {
    if (content['$']) {
      // Это тег x или другой — возвращаем как плейсхолдер
      const id = content['$'].id || content['$']['equiv-text'] || 'X';
      return `{{${id}}}`;
    }
  }
  return '';
}

fs.readFile('src/locale/messages.xlf', 'utf8', (err, data) => {
  if (err) throw err;

  parser.parseString(data, (err, result) => {
    if (err) throw err;

    const translations = {};
    try {
      const units = result.xliff.file[0].body[0]['trans-unit'];

      units.forEach((unit) => {
        const sourceRaw = unit.source?.[0];
        const targetRaw = unit.target?.[0];

        const source = flattenXlfContent(sourceRaw).trim();
        const target = flattenXlfContent(targetRaw).trim();

        if (source && target) {
          const key = source.replace(/\s+/g, '_').toUpperCase().slice(0, 50); // укоротим ключ
          translations[key] = target;
        }
      });

      const outputDir = 'src/assets/i18n';
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      fs.writeFileSync(`${outputDir}/uk-UA.json`, JSON.stringify(translations, null, 2), 'utf8');
      console.log('✅ uk-UA.json создан успешно!');
    } catch (e) {
      console.error('❌ Ошибка обработки файла:', e);
    }
  });
});

