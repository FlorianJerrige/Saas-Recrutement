// Ajouter un nouveau poste
router.post('/:partnerId/positions', async (req, res) => {
    const partner = await Partner.findById(req.params.partnerId);
    const position = new Position({ ...req.body, partner: partner._id });
    await position.save();
  
    partner.openPositions.push(position._id);
    await partner.save();
  
    res.status(201).json(position);
  });
  
  // Modifier un poste
  router.put('/positions/:id', async (req, res) => {
    const updatedPosition = await Position.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPosition);
  });
  
  // Supprimer un poste
  router.delete('/positions/:id', async (req, res) => {
    const position = await Position.findById(req.params.id);
    const partner = await Partner.findById(position.partner);
  
    partner.openPositions = partner.openPositions.filter(pos => pos.toString() !== position._id.toString());
    await partner.save();
  
    await position.remove();
    res.status(204).end();
  });
  