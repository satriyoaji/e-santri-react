import { MERCHANTS } from 'constants/dummies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button } from "reactstrap";
import DetailField from '../../components/DetailField';

const MerchantDetail = () => {
  const { id: merchantId } = useParams();
  const [merchant, setMerchant] = useState(null);

  useEffect(() => {
    const fetchedMerchant = MERCHANTS.find(m => m.id == merchantId);
    setMerchant([
      {
        label: 'Nama Merchant',
        value: fetchedMerchant?.name,
      },
      {
        label: 'Nama Pemilik',
        value: fetchedMerchant?.owner_name,
      },
      {
        label: 'Alamat Usaha',
        value: fetchedMerchant?.address,
      },
      {
        label: 'Alamat Pemilik',
        value: fetchedMerchant?.owner_address,
      },
      {
        label: 'Nomor Telepon',
        value: fetchedMerchant?.phone_number,
      },
      {
        label: 'Bidang Usaha',
        value: fetchedMerchant?.niche,
      },
      {
        label: 'Tahun Bergabung',
        value: fetchedMerchant?.join_year,
      },
      {
        label: 'Email Pemilik',
        value: fetchedMerchant?.owner_email,
      },
    ]);
  }, [merchantId]);

  return (
    <>
      <p className="text-center">Data Merchant Pondok Pesantren Tambak Beras Jombang</p>
      <hr className="mb-3" />
      <img src={require('../../images/shop.png')} alt="" className="w-25 mx-auto d-block mb-4" />
      <DetailField fieldData={merchant} />
      <div className="d-flex justify-content-between">
        <Button color="danger">Hapus Data</Button>
        <Button color="success">Kembali</Button>
      </div>
    </>
  );
};

export default MerchantDetail;