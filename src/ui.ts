import './ui.css';

document.getElementById('create').onclick = () => {
  const textboxRow = document.getElementById('rows') as HTMLInputElement;
  const textboxCols = document.getElementById('cols') as HTMLInputElement;
  const textboxWidth = document.getElementById('width') as HTMLInputElement;
  const textboxHeight = document.getElementById('height') as HTMLInputElement;
  const textboxMargin = document.getElementById('margin') as HTMLInputElement;
  const rows = parseInt(textboxRow.value, 10);
  const cols = parseInt(textboxCols.value, 10);
  const width = parseInt(textboxWidth.value, 10);
  const height = parseInt(textboxHeight.value, 10);
  const margin = parseInt(textboxMargin.value, 10);

  parent.postMessage({ pluginMessage: { 
    type: 'create-rectangles',
    rows,
    cols,
    width,
    height,
    margin
  } }, '*')
}

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}