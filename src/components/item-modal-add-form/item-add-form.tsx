import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { Modal, Button, Form } from 'react-bootstrap';
import './item-add-form.css';

interface IProps {
  onItemAdded: (label: string, endDate: string) => void;
}

const ItemAddForm: FC<IProps> = ({ onItemAdded }) => {
  const { t } = useTranslation();
  const [label, setLabel] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const [withEndDate, setWithEndDate] = useState<boolean>(false);
  const [endDate, setEndDate] = useState<string>(moment().format());
  const [endTime, setEndTime] = useState<string>('');

  const onLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onEndDateChange = () => {
    setWithEndDate(!withEndDate);
  };

  const onDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const onTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (label.length > 0) {
      const deadLine = withEndDate ? endDate + ' ' + endTime : '';
      onItemAdded(label, deadLine);
      setLabel('');
      setEndDate('');
      setEndTime('');
      handleClose();
    }
    if (label.length < 1) {
      alert('Add task title!');
    }
  };

  const minTime = moment(endDate).isSame(moment().format('YYYY-MM-DD'))
    ? moment().format('HH:mm')
    : '';

  const EndDate = withEndDate ? (
    <Form.Group className="mb-3 d-flex">
      <Form.Control
        type="date"
        min={moment().format('YYYY-MM-DD')}
        value={endDate}
        onChange={onDateChange}
      />
      <Form.Control
        type="time"
        min={minTime}
        value={endTime}
        onChange={onTimeChange}
      />
    </Form.Group>
  ) : (
    ''
  );
  return (
    <>
      <div style={{ display: 'grid' }}>
        <Button variant="outline-secondary" size="lg" onClick={handleShow}>
          {t('Add item')}
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t('Add new todo')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="item-add-form" onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>{t('Task name')}</Form.Label>
              <div className="d-flex">
                <Form.Control
                  className="w-75"
                  onChange={onLabelChange}
                  value={label}
                  type="text"
                  placeholder={t('What needs to be done')}
                />

                <Button
                  variant="outline-secondary"
                  className="w-25"
                  type="submit"
                >
                  {t('Add item')}
                </Button>
              </div>
              <Form.Group className="mb-3">
                <Form.Check
                  checked={withEndDate}
                  type="checkbox"
                  label={t('Add end date')}
                  onChange={onEndDateChange}
                />
              </Form.Group>
              {EndDate}
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ItemAddForm;
